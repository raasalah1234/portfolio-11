import { Component } from '@angular/core';
import { AddAddressService } from '../../services/add-address.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,HeaderComponent, FooterComponent],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.scss'
})
export class AddAddressComponent {
  home : any = "";
  homeDetails :any = "";
  phone :any = "";
  city :any = "";

  addresses : any[] = [];

  isFirstSubmit: boolean = true;

  selectedAddressId: string = '';



  constructor(private _addaddress : AddAddressService){
  }

  addAddress(){
    if (!this.home || !this.homeDetails || !this.phone || !this.city) {
    alert("Please fill all required fields");
    return;
  }
    this._addaddress.addAddress(this.home,this.homeDetails,this.phone,this.city).subscribe({
      next : (res)=>{
        console.log("success",res);

        this.home = "";
        this.homeDetails = "" ;
        this.phone = "" ;
        this.city = "" ;

        this.getAllAddress();

        this.isFirstSubmit = false;


      },
      error : (err)=>{
        console.log(err);
      }
    });
  }



  deleteAddress(id : any){
    this._addaddress.deleteAddress(id).subscribe({
      next : (res)=> {
        console.log("success",res);
        this.getAllAddress();
      },
      error : (err)=>{
        console.log(err);
      }
    })

  }
 getAllAddress(){
    this._addaddress.getAllAddress().subscribe({
      next : (res)=> {
        console.log("success",res);
        this.addresses = res.data;
      },
      error : (err)=>{
        console.log(err);
      }
    })

  }


 
}
