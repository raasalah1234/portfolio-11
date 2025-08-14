import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AuthserviceService } from '../../../shared/services/authservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecurrentpassword',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule],
  templateUrl: './updatecurrentpassword.component.html',
  styleUrl: './updatecurrentpassword.component.scss'
})
export class UpdatecurrentpasswordComponent {
    currentpassword : string = "" ;
    password : string = "" ;
    repassword : string = "" ;
    passworderror : any ;
    repassworderror : any ;

    constructor(private _auth : AuthserviceService,
                private router : Router
    ){

    }

    validatePassword(password : any) : string {
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
      return "";
    }

    update(){
      if (!this.currentpassword || !this.password|| !this.repassword) {
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

  // تحقق من تطابق الباسورد
  if (this.password !== this.repassword) {
    this.repassworderror = "Passwords do not match";
    return;
  } else {
    this.repassworderror = "";
  }
      this._auth.update(this.currentpassword,this.password,this.repassword).subscribe({
        next : (res)=>{
          console.log("success",res);
          alert("successfully updated");
          this.router.navigate(['/allproducts'])
        },
         error : (err)=>{
          console.log(err);
          alert("Data is not correct");
        },
      })
    }
}
