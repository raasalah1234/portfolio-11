import { Component } from '@angular/core';
import { ForgotpasswordService } from '../../services/forgotpassword.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [FormsModule, HeaderComponent,FooterComponent],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  usermail : string = "";

  constructor(private _ForgotpasswordService : ForgotpasswordService,
                private router: Router

  ) {}

  submitEmail() {
    const data = {email: this.usermail};
    this._ForgotpasswordService.forgotPassword(data).subscribe({
      next : (res) =>{
        console.log(res);
        this.router.navigate(['/verify-code']);

      }
    })
  }


}
