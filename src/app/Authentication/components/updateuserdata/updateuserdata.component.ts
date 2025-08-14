import { Component } from '@angular/core';
import { UpdateuserdataService } from '../../services/updateuserdata.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuserdata',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './updateuserdata.component.html',
  styleUrl: './updateuserdata.component.scss'
})
export class UpdateuserdataComponent {
  name :  string = "";
  email : string = "";
  phone : string = "";

  constructor(private _update : UpdateuserdataService,
              private router : Router
  ){}

  updateData(){
    this._update.update(this.name,this.email,this.phone).subscribe({
      next :(res)=>{
        console.log("success",res);
        this.router.navigate(['/signin']);
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

}
