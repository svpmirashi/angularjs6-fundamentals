import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-prop-bind]',
  template: `
    <div>
      Hello from Property Binder
      <input [id]="myId" type = "text" value="Shree">
      <input id="{{myId}}" type = "text" value="Shree">
      <input [disabled]="isDisable" [type] = "inputType" [value]="name">
      <br><br>
      <div [class]="messageClass">Here the message goes..</div><br><br>
      <div [ngClass]="messageClasses">Checking ngClass bingding to object</div>
      <h1 [style.color]="this.isError ? 'red' : 'green'">Testing Style binding style.color</h1>
      <h1 [ngStyle]="messageStyles">Applying/binding ngStyle attribute</h1>
    </div>
  `,
  styles: [`
      div{ font-size: 24px; }
      input{ color: red; font-size: 24px; }
      .message-success{
        color: green;
      }      
      .message-danger{
        color: red;
      }
      .message-warning{
        color: orange;
      }      
      .special{
        font-style: italic;
      }
  `]
})
export class PropBindComponent implements OnInit {
  public myId = "testId1";
  public isDisable = true;
  public name = "Shrikrishna";
  public inputType = "button";
  public isError = false;
  public isSpecial = true;
  public messageClass = "message-danger";
  public messageClasses = {
    "message-success": !this.isError,
    "message-danger": this.isError,
    "special": this.isSpecial
  };

  public messageStyles = {
    color: "blue",
    fontStyle: "italic",
    border: "5px solid red",
    position: "absolute"
  };

  constructor() { }

  ngOnInit() {
    
  }

}
