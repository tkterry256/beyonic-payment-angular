import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  product = 'BYOB WORKSHOP';
  description =
    'Career workshop ‘23 - Unlocking your networking potential masterclass, workshop and conference event ...';
  unitAmount = 85_000;
  paymentForm = this.fb.group({
    quantity: [1, Validators.max(19)],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get quantity() {
    return this.paymentForm.get('quantity')!;
  }

  incrementQuantity() {
    const value = this.quantity.value as number;
    this.quantity.setValue(value + 1);
  }

  decrementQuantity() {
    const value = this.quantity.value as number;
    value > 1 && this.quantity.setValue(value - 1);
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.router.navigate(['payment-success'], {
        state: {
          product: this.product,
          description: this.description,
          unitAmount: this.unitAmount,
          quantity: this.quantity.value,
        },
      });
    }
  }
}
