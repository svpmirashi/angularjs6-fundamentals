import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

export class A{
  show(): void{
    console.log("In a");
  }
}

export class B
{
  constructor(private a : A){
    this.display();
  }
  
  display(): void{
    this.a.show();
  }
}

@Component({
  selector: '[app-banner]',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  
  //constructor(i : number) { }

  public a: A = new A();
  public b: B = new B(this.a);
  
  ngOnInit() {
    this.b.display();
  }

}