import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { HomeComponent } from "../Pages/home/home.component";
import { ProductComponent } from "../Pages/product/product.component";
import { AboutComponent } from "../Pages/about/about.component";
import { InfomationComponent } from "../Pages/infomation/infomation.component";
import { AuthGuard } from "../shared/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "Home",
      },
      {
        path: "Home",
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "Productos",
        component: ProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "Acercade",
        component: AboutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "Info",
        component: InfomationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
