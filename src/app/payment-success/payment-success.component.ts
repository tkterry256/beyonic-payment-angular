import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  orderDetails = [
    {label: 'Date of purchase', value: '12 July 2023'},
    {label: 'Unit amount', value: '85,000 UGX'},
    {label: 'Quantity', value: '10 units'},
    {label: 'Description', value: 'Career workshop‘23 - Unl...'},
    {label: 'Amount paid', value: '850,000 UGX'},
  ]
}
