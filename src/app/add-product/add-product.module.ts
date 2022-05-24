import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductComponent } from './add-product.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AddProductComponent],
  exports: [AddProductComponent]
})
export class AddProductComponentModule {}
