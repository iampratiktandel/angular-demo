import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  productForm = this.formBuilder.group({
    productName: [null, Validators.required],
    type: [null, Validators.required],
    price: [null, Validators.required],
    deliveryAddress: this.formBuilder.array([
      this.formBuilder.group({
        city: [null, Validators.required],
        state: [null, Validators.required]
      })
    ])
  });

  get deliveryAddress() {
    return this.productForm.get('deliveryAddress') as FormArray;
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  addAddress() {
    this.deliveryAddress.push(
      this.formBuilder.group({
        city: [null],
        state: [null]
      })
    );
  }

  deleteAddress(index: number) {
    this.deliveryAddress.removeAt(index);
  }

}
