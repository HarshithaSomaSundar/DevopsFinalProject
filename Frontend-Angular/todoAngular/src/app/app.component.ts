import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Todo Application';
  constructor() { 

  }
  show : any;
  showBtn : any = "Add";
  ngOnInit(): void {
    
  }
  outputemit(x : string){
    this.showBtn = x;
  }
}