import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CategoriesComponent } from '../app/categories/components/categories.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AllProductsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-store';
}
