import { Component } from '@angular/core';
import { VerificationService } from '../../services/verification.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  code : any = "" ;
  constructor(private _verification : VerificationService , 
    private router : Router 
  ){}

  verificationCode() {

    this._verification.verification(this.code).subscribe({
     next : (res) =>{
      console.log(res);
      if (res.status === "Success") { // ✅ تأكدي إن status = "Success"
        this.router.navigate(['/resetpassword']);
      } else {
        alert("Invalid or expired reset code. Please try again.");
      }
     }
    })

  }
}


