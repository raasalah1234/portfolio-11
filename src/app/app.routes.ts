import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CategoriesComponent } from './categories/components/categories.component';
import { SignUpComponent } from './Authentication/components/sign-up/sign-up.component';
import { SigninComponent } from './Authentication/components/signin/signin.component';
import { ForgotpasswordComponent } from './Authentication/components/forgotpassword/forgotpassword.component';
import { UsercartComponent } from './cart/components/usercart/usercart.component';
import { VerificationComponent } from './Authentication/components/verification/verification.component';
import { ResetpasswordComponent } from './Authentication/components/resetpassword/resetpassword.component';
import { WishComponent } from './wishlist/components/wish/wish.component';
import { UpdateuserdataComponent } from './Authentication/components/updateuserdata/updateuserdata.component';
import { GetallusersComponent } from './Authentication/components/getallusers/getallusers.component';
import { AddAddressComponent } from './address/components/add-address/add-address.component';
import { CreatecashComponent } from './orders/components/createcash/createcash.component';
import { GetallbrandsComponent } from './brands/components/getallbrands/getallbrands.component';
import { GetspecificbrandComponent } from './brands/components/getspecificbrand/getspecificbrand.component';
import { AllSubcategoryComponent } from './sub-category/components/all-subcategory/all-subcategory.component';
import { SubDetailsComponent } from './sub-category/components/sub-details/sub-details.component';
import { UpdatecurrentpasswordComponent } from './Authentication/components/updatecurrentpassword/updatecurrentpassword.component';

export const routes: Routes = [
     {path:"allproducts" , component:AllProductsComponent},
     {path:"details/:id" , component:ProductsDetailsComponent},
     {path:"subdetails/:id" , component:SubDetailsComponent},
     {path:"categories" , component:CategoriesComponent},
     {path:"productdetails/:id" , component:ProductsDetailsComponent},
     {path:"signup" , component:SignUpComponent},
     {path:"signin" , component:SigninComponent},
     {path:"forgotpassword" , component:ForgotpasswordComponent},
     {path:"cart" , component:UsercartComponent},
     {path:"verify-code" , component:VerificationComponent},
     {path:"resetpassword" , component:ResetpasswordComponent},
     {path:"wish" , component:WishComponent},
     {path:"update" , component:UpdateuserdataComponent},
     {path:"allusers" , component:GetallusersComponent},
     {path:"addaddress" , component:AddAddressComponent},
     {path:"cash" , component:CreatecashComponent},
     {path:"allbrands" , component:GetallbrandsComponent},
     {path:"specificbrand/:id" , component:GetspecificbrandComponent},
     {path:"allsub" , component:AllSubcategoryComponent},
     {path:"updatecurrentpassword" , component:UpdatecurrentpasswordComponent},
     {path:"**" ,redirectTo:"allproducts" ,pathMatch:'full'}
];
