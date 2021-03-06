import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from '../Pages/home/home.component';
import { ProductComponent } from '../Pages/product/product.component';
import { AboutComponent } from '../Pages/about/about.component';
import { InfomationComponent } from '../Pages/infomation/infomation.component';
import { CommonModule } from '@angular/common';
import { CardproductComponent } from '../components/cardproduct/cardproduct.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    InfomationComponent,
    CardproductComponent,
  ],
  imports: [LayoutRoutingModule, CommonModule, MatCardModule],
  providers: [],
})
export class LayoutModule { }
