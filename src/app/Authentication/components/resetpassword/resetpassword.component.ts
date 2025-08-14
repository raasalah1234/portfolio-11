import { Component } from '@angular/core';
import { ResetpasswordService } from '../../services/resetpassword.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {

  email : string = "";
  password : string = "";

    passworderror : string = "";
  repassworderror : string = "" ;

  constructor(private _resetpassword : ResetpasswordService,
              private router : Router){}

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

  resetPass(){
     // تحقق من الحقول الفارغة
  if (!this.email || !this.password) {
    alert("Please fill all required fields");
    return;
  }

  // تحقق من الباسورد
   const passwordError = this.validatePassword(this.password);
   if (passwordError) {
      this.passworderror = passwordError;
    return;
  } else {
    this.passworderror = "";
  }

    const data = {email : this.email , newPassword : this.password}
    this._resetpassword.resetPassword(data).subscribe({
      next : (res)=> {
        console.log(res);

            localStorage.setItem("userToken", res.token);

        this.router.navigate(['/signin']);
        

      }
    })
  }

}
