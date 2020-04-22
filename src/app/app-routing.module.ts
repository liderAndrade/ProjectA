import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./Layout/layout.module").then((m) => m.LayoutModule),
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
