import { Component } from '@angular/core';
import { GetallusersService } from '../../services/getallusers.service';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallusers',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.scss'
})
export class GetallusersComponent {

  allusers : any[] = [];

  constructor(private _getusers : GetallusersService){
    
  this.getAllUsers();
  }

  getAllUsers(){
    this._getusers.getAllUsers().subscribe({
      next : (res)=>{
        console.log("success",res);
        this.allusers = res.users ;
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

}
