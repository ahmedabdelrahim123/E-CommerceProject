import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  myForm: FormGroup;
  // zip: string = '';
  public products : any = [];
  public pID : any = [];
  public grandTotal !: number;
  public Total !: number;
  public totalItem : number = 0;
  public errormessage = '';


constructor(private cartService : CartService,private formBuilder: FormBuilder, private router: Router,private myService: DataService) {
  this.myForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    apartment: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    phone: ['', Validators.required]
  });
}
get firstName() {
  return this.myForm.get('firstName');
}

get lastName() {
  return this.myForm.get('lastName');
}

get address() {
  return this.myForm.get('address');
}
get email() {
  return this.myForm.get('email');
}

get phone() {
  return this.myForm.get('phone');
}

get zip() {
  return this.myForm.get('zip');
}
get apartment() {
  return this.myForm.get('apartment');
}

get city() {
  return this.myForm.get('city');
}








ngOnInit(): void {
this.cartService.getProducts()
.subscribe(res=>{
  this.products = res;
  this.grandTotal = this.cartService.getTotalPrice();
  this.Total = this.cartService.getTotalPrice()+40;
    this.totalItem = res.length;

})
}
Pay() {
  const formValues = this.myForm.value;
  if (!formValues.firstName || !formValues.email || !formValues.lastName || !formValues.phone || !formValues.zip || !formValues.city || !formValues.apartment) {
    let errorMsg = "Please fill in all required fields:";
    if (!formValues.firstName) {
      this.firstName?.markAsTouched();
      if (this.firstName && this.firstName.invalid) {
        errorMsg += " First Name";
      }
    }
    if (!formValues.email) {
      this.email?.markAsTouched();
      if (this.email &&this.email.invalid) {
        errorMsg += " Email";
      }
    }
    if (!formValues.lastName) {
      this.lastName?.markAsTouched();
      if (this.lastName&&this.lastName.invalid) {
        errorMsg += " Last Name";
      }
    }
    if (!formValues.address) {
      this.address?.markAsTouched();
      if (this.address && this.address.invalid) {
        errorMsg += " address";
      }
    }
    if (!formValues.phone) {
      this.phone?.markAsTouched();
      if (this.phone &&this.phone.invalid) {
        errorMsg += " Phone";
      }
    }
    if (!formValues.zip) {
      this.zip?.markAsTouched();
      if (this.zip && this.zip.invalid) {
        errorMsg += " Zip";
      }
    }
    if (!formValues.city) {
      this.city?.markAsTouched();
      if (this.city &&this.city.invalid) {
        errorMsg += " City";
      }
    }
    if (!formValues.apartment) {
      this.apartment?.markAsTouched();
      if (this.apartment &&this.apartment.invalid) {
        errorMsg += " Apartment";
      }
    }
    // alert(errorMsg);
  }
  else if (this.myForm.valid) {
    this.router.navigate(['/strip']);
  }
  else {
    alert("Invalid data");
  }
}

ordercreate(){
  // const formData = new FormData();
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken: any = jwt_decode(token);
    const userID = decodedToken.userId;
    console.log(userID);
  for (let i = 0; i < this.products.length; i++) {
    console.log('product id:',this.products[i]._id);
    this.pID.push(this.products[i]._id);
  }
  let order={ pID:this.pID,userID,Total:this.Total} ;

  this.myService.createorder(order).subscribe(res=>{

});
}

}
}
