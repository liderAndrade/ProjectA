import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApplicationProvider } from 'src/app/Providers/Provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  load = true;

  valores: Product[];

  constructor(private coreService: ApplicationProvider) { }

  ngOnInit() {
    this.coreService.GetProducts().subscribe(
      (response: any) => {
        this.valores = response;
        if (this.valores.length > 1) {
          this.load = false;
        }
      },
      (error) => {
        console.log('error: ', error);
        this.load = false;
      }
    );
  }

  showItems() { }
}
