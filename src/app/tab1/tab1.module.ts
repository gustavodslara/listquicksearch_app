import { AppPreferences } from '@awesome-cordova-plugins/app-preferences/ngx';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AddProductComponentModule } from '../add-product/add-product.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddProductComponentModule,
    Tab1PageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [Tab1Page],
  providers: [AppPreferences],
})
export class Tab1PageModule {}
