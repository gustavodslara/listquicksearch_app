import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  produtos: Array<Product> = [
    { name: 'Kitubaina 1.5', imgBase64: '', price: 5 },
    { name: 'Coca 2L', imgBase64: '', price: 10 },
    { name: 'Coca 2.5L', imgBase64: '', price: 11 },
    { name: 'Ruffles', imgBase64: '', price: 3 },
    { name: 'Suco DelVale 1L', imgBase64: '', price: 7 },
  ];

  filtro: string;
  constructor() {}
}
