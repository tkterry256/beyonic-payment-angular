import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
})
export class PaymentSuccessComponent {
  paymentDetails!: Record<string, any>;

  constructor(private router: Router) {
    const state = router.getCurrentNavigation()?.extras.state;
    if (!state) {
      router.navigate(['/'], { replaceUrl: true });
      return;
    }
    this.paymentDetails = {
      dateOfPurchase: Date.now(),
      unitAmount: state['unitAmount'],
      quantity: state['quantity'],
      description: state['description'],
      amountPaid: state['unitAmount'] * state['quantity'],
    };
  }
}
