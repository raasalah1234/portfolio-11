import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreatecashService } from '../../services/createcash.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-createcash',
  standalone: true,
  imports: [CommonModule, FormsModule ,HeaderComponent,FooterComponent],
  templateUrl: './createcash.component.html',
  styleUrl: './createcash.component.scss'
})
export class CreatecashComponent {
  
    selectedAddressId: string = '';
    addresses : any[] = [] ;

    details : any = "";
    phone : any = "";
    city : any = "";

    constructor(private _cash : CreatecashService){}

createOrder() {
//   if (!this.selectedAddressId) {
//     alert("Please select an address.");
//     return;
//   }
if (!this.details || !this.phone|| !this.city ) {
    alert("Please fill all required fields");
    return;
  }

   this._cash.createCashOrder(localStorage.getItem("cartId"),this.details,this.phone,this.city).subscribe({
    next: (res) => {
      console.log("✅ Order created", res);
      alert ("Order Created Successfully")
        if (res?.session?.url) {
        // تحويل المستخدم لصفحة الدفع Stripe
        window.location.href = res.session.url;
      } else {
        alert("Order created but no payment session found.");
      }
  
    },
    error: (err) => {
      console.error("❌ Error creating order", err);
    }
  });
}



}
