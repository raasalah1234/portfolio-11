import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsercartService } from '../../services/usercart.service';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercart',
  standalone: true,
  imports: [RouterModule, CommonModule,HeaderComponent, FooterComponent,FormsModule],
  templateUrl: './usercart.component.html',
  styleUrl: './usercart.component.scss'
})
export class UsercartComponent implements OnInit{
  cartItems : any[] = [];
  newCount : any ;
  constructor(private _usercart : UsercartService){}

  ngOnInit(): void {
    this.getCartItems();
  }

   getCartItems() {
    this._usercart.getLoggedUserCart().subscribe({
      next: (res) => {
        console.log("✅ Cart Data:", res);
        console.log(localStorage.getItem("userToken"));
        localStorage.setItem("cartId",res.cartId);
        
        this.cartItems = res.data.products; // غيري بناءً على شكل response
      }
});
   }

   removeItem(id :any){
    this._usercart.removeSpecificItem(id).subscribe({
      next : (res)=>
      {

        console.log("success" ,res);
        this.getCartItems();
      },
      error : (err) => {
        console.log("error",err);
      },
    })

   }

  removeAllCart(){
    this._usercart.removeAllCart().subscribe({
      next : (res)=>{
        console.log("success",res);
        this.getCartItems();
      },
      error : (err)=>
      {
        console.log(err);
      }
    })
  }

 
updateQuantity(productId: string, newCount: number) {
  // تحويل القيمة لرقم صالح
  const count = Number(newCount) || 1;
  if (count < 1) { 
    alert('الكمية لا يمكن أن تكون أقل من 1');
    return;
  }

  // تحديث محلي سريع للواجهة (optimistic)
  const item = this.cartItems.find(i => i.product._id === productId);
  const previous = item ? item.count : null;
  if (item) item.count = count;

  // نرسل للسيرفر التحديث (service)
  this._usercart.updateQuantity(productId, count).subscribe({
    next: (res) => {
      console.log('Quantity updated on server', res);
      
    },
    error: (err) => {
      console.error('Error updating quantity', err);
      // لو فشل نرجع القيمة القديمة
      if (item && previous !== null) item.count = previous;
      alert(err?.error?.message || 'فشل تحديث الكمية، حاولى مرة أخرى');
    }
  });
}




  }

