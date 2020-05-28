import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  home: boolean = true;
  product: boolean = false;
  about: boolean = false;
  info: boolean = false;

  constructor(private router: Router) {
    this.changeClassActiveLink(this.router.url.split('/')[1]);
  }

  ngOnInit() { }

  routerTo(ruta: string) {
    this.changeClassActiveLink(ruta);
    if (ruta === 'login') {
      localStorage.removeItem('is_loggin');
    }
    this.router.navigate(['/' + ruta]);
  }

  changeClassActiveLink(ruta: string) {
    switch (ruta.toLocaleLowerCase()) {
      case 'home':
        this.home = true;
        this.product = false;
        this.about = false;
        this.info = false;
        break;
      case 'productos':
        this.product = true;
        this.home = false;
        this.about = false;
        this.info = false;
        break;
      case 'acercade':
        this.about = true;
        this.home = false;
        this.product = false;
        this.info = false;
        break;
      case 'info':
        this.info = true;
        this.home = false;
        this.product = false;
        this.about = false;
        break;
    }
  }
}
