import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { StripComponent } from './Components/strip/strip.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { DashboradComponent } from './Components/dashborad/dashborad.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { DashboardProductsComponent } from './Components/dashboard-products/dashboard-products.component';
import { OrdersdetailsComponent } from './ordersdetails/ordersdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    CartComponent,
    CheckoutComponent,
    StripComponent,
    ContactusComponent,
    UserProfileComponent,
    DashboradComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DashboardProductsComponent,
    OrdersdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
