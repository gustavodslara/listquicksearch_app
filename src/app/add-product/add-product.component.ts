import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-product-container',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
