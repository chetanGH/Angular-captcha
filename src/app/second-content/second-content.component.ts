import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.css']
})
export class SecondContentComponent implements OnInit {
  keyId:any = environment.key;
  token:any = null;
  constructor() { }

  ngOnInit(): void {
  }
  resolved(e:any){
    this.token = e;
  }
}
