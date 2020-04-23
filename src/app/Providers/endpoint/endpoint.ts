import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class EndPointProvider {
  private host: string;

  constructor(private http: HttpClient, private router: Router) {
    this.host = environment.host;
  }

  Loggin<T>(user: User): Observable<T> {
    const endpoint = this.host + "/api/Api";
    console.log("endpoint: ", endpoint);
    return this.http.post<T>(endpoint, user);
  }

  getProducts<T>(): Observable<T> {
    const endpoint = this.host + "/api/Api/getproducts";
    return this.http.get<T>(endpoint);
  }

  getRequestHeaders(
    access_token: any
  ): {
    headers:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
  } {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + "",
      "Content-Type": "application/json",
    });
    return { headers: headers };
    // if (new Date(access_token.Expires) > new Date()) {
    //     const headers = new HttpHeaders({
    //         'Authorization': 'Bearer ' + access_token.token,
    //         'Content-Type': 'application/json'
    //     });
    //     return { headers: headers };
    // } else {
    //     console.log('dentro del else ');
    //     this.router.navigate(['/login']);
    // }
  }
}
