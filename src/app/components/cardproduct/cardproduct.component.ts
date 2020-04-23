import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/interfaces/product";

@Component({
  selector: "app-cardproduct",
  templateUrl: "./cardproduct.component.html",
  styleUrls: ["./cardproduct.component.scss"],
})
export class CardproductComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}
