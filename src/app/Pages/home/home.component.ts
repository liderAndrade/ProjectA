import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/product";
import { ApplicationProvider } from "src/app/Providers/Provider";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // valores: Product[] = [
  //   { title: "title 1", description: "description1" },
  //   { title: "title 2", description: "description2" },
  //   { title: "title 3", description: "description3" },
  //   { title: "title 4", description: "description4" },
  //   { title: "title 5", description: "description5" },
  //   { title: "title 6", description: "description6" },
  //   { title: "title 7", description: "description7" },
  //   { title: "title 8", description: "description8" },
  //   { title: "title 9", description: "description9" },
  //   { title: "title 10", description: "description10" },
  //   { title: "title 11", description: "description11" },
  // ];

  valores: Product[];

  constructor(private coreService: ApplicationProvider) {}

  ngOnInit() {
    this.coreService.GetProducts().subscribe(
      (response: any) => {
        this.valores = response;
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  }

  showItems() {}
}
