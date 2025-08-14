import { Component } from '@angular/core';
import { SigninService } from '../../services/signin.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../shared/services/authservice.service';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,RouterModule,HeaderComponent,FooterComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  user : any = {
   email : '',
   password : ''

  };
  constructor(private _SigninService : SigninService ,
              private router : Router,
              private _auth : AuthserviceService
  ) {
    
  }

  submitSignIn() {
    this._SigninService.SignIn(this.user).subscribe({
      next : (res) => {
        console.log(res);

        localStorage.setItem("userToken", res.token);
        localStorage.setItem("userName", res.user.name);
        this._auth.saveUserData();

        this.router.navigate(['/allproducts'])

      },
      error : (err)=> {
        console.log(err);
        alert("Data is not correct");
      }
    });


  }
}
