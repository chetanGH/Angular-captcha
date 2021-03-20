import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token:any = null;
  title = 'angular-captcha';

  resolved(e){
    this.token = e;
  }
}
