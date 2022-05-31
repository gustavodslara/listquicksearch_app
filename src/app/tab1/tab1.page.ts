import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { AppPreferences } from '@awesome-cordova-plugins/app-preferences/ngx';
import { Product } from '../model/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  produtos: Array<Product> = [
    { name: 'Kitubaina 1.5', price: 5 },
    { name: 'Coca 2L', price: 10 },
    { name: 'Coca 2.5L', price: 11 },
    { name: 'Ruffles', price: 3 },
    { name: 'Suco DelVale 1L', price: 7 },
  ];

  produtosBkp: Array<Product> = [];

  filtro: string;
  constructor(
    // private appPreferences: AppPreferences,
    private alertCtrl: AlertController
  ) {
    // this.appPreferences.fetch('produtos').then((produtos) => {
    //   this.produtos = produtos != null ? JSON.parse(produtos) : [];
    //   this.produtosBkp = this.produtos;
    // });
  }

  filtroChanged() {
    this.produtos.filter((p) =>
      p.name.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  presentPrompt() {
    this.alertCtrl
      .create({
        header: 'Adicionar Produto',
        inputs: [
          { type: 'text', name: 'nome', placeholder: 'Nome' },
          { type: 'number', name: 'preco', placeholder: 'Preço' },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Salvar',
            role: 'save',
            handler: (data) => {
              const prod = new Product(data.nome, data.preco);
              this.produtos.push(prod);

              // this.appPreferences.store(
              //   'produtos',
              //   JSON.stringify(this.produtos)
              // );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
