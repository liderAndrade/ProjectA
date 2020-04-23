import { Injectable } from "@angular/core";
import { EndPointProvider } from "../endpoint/endpoint";

@Injectable()
export class ApplicationProvider {
  constructor(private coreEndPoint: EndPointProvider) {}

  Loggin(user: User) {
    return this.coreEndPoint.Loggin(user);
  }

  GetProducts() {
    return this.coreEndPoint.getProducts();
  }
}
