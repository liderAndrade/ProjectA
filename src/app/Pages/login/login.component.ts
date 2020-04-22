import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApplicationProvider } from "../../Providers/Provider";
import { ResponseLoggin } from "../../interfaces/ResponseLoggin";
import { NotyfService } from "ng-notyf";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  sendForm: FormGroup;
  submitted = false;
  loadclick = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private coreService: ApplicationProvider,
    private notyfService: NotyfService
  ) {
    this.sendForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.notyfService.toastContainerStyle = { top: "0" };
    this.notyfService.toastDelay = 2000;
  }

  ngOnInit() {}

  Loggin(formValues) {
    this.submitted = true;
    this.loadclick = true;

    if (this.sendForm.invalid) {
      this.loadclick = false;
      return;
    }

    this.coreService.Loggin(formValues).subscribe(
      (response: ResponseLoggin) => {
        console.log("response: ", response);
        if (response.state == "Ok") {
          const resp = response;
          const Expires = new Date();
          Expires.setSeconds(Expires.getSeconds() + 86400);
          resp["Expires"] = Expires;
          localStorage.setItem("DATA_LOGGIN", JSON.stringify(resp));
          localStorage.setItem("is_loggin", "true");
          this.submitted = false;
          this.loadclick = false;
          this.router.navigate(["/Home"]);
        } else {
          this.loadclick = false;
          this.submitted = false;
        }
      },
      (error) => {
        this.notyfService.error("Ocurrió un error reintentelo");
        console.log("error: ", error);
        this.submitted = false;
        this.loadclick = false;
      }
    );
  }
}
