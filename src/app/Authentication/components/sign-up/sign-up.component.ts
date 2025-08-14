import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import {  Router, RouterModule } from '@angular/router'; 
import { AuthserviceService } from '../../../shared/services/authservice.service';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { SpinerComponent } from "../../../shared/components/spiner/spiner.component";
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  


user: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
} = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
  phone: ""
};


  errorMessage: string = "";
  passworderror : string = "";
  repassworderror : string = "" ;

  constructor(private _SignUpService : SignUpService,
              private router : Router,
              private _auth : AuthserviceService,
              
   ){}

  validatePassword(password: string): string {
  // Regex نمط كلمة المرور
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }
  if (!/[@$!%*?&]/.test(password)) {
    return "Password must contain at least one special character (@$!%*?&)";
  }

  return ""; // valid
}

   

 submitSignup() {
  // تحقق من الحقول الفارغة
  if (!this.user.name || !this.user.email || !this.user.password || !this.user.rePassword || !this.user.phone) {
    alert("Please fill all required fields");
    return;
  }

  // تحقق من الباسورد
   const passwordError = this.validatePassword(this.user.password);
   if (passwordError) {
      this.passworderror = passwordError;
    return;
  } else {
    this.passworderror = "";
  }

  // تحقق من تطابق الباسورد
  if (this.user.password !== this.user.rePassword) {
    this.repassworderror = "Passwords do not match";
    return;
  } else {
    this.repassworderror = "";
  }

  // لو كله تمام نكمل عملية التسجيل
  this._SignUpService.signUp(this.user).subscribe({
    next: (res) => {
      localStorage.setItem("userToken", res.token);
      localStorage.setItem("userName", res.user.name);
      this._auth.saveUserData();
      this.router.navigate(['/allproducts']);
    },
    error: (err) => {
      if (err.status === 409) {
        alert("Account already exists. Please log in instead.");
      } else {
        alert("An unexpected error occurred.");
      }
    }
  });
}



}

