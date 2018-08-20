import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public my_text: String;
  public my_number: number = 10;

  constructor() { }

  ngOnInit() {
    this.my_text = 'my-component works!';
    this.my_number = this.multiply(this.my_number).valueOf();
  }

  multiply(n: number, n1?: number) : Number {
    return n*100;
  }

}
