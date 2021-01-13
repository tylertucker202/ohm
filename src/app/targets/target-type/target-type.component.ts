import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-type',
  template: `
  <div id="target-type" class="mat-elevation-z8">
  <h3>Target type:</h3>
  <form>
    <mat-radio-group
    aria-labelledby="radio-group-label"
    class="radio-group"
    [(ngModel)]="selectedTargetType"
    [ngModelOptions]="{standalone: true}"
    >
    <mat-radio-button class="rad-button" *ngFor="let targetType of targetTypes" [value]="targetType">
      {{targetType}}
    </mat-radio-button>
    </mat-radio-group>
  <mat-form-field>
    <mat-label >Other</mat-label>
    <input matInput type="text" value={{otherType}} placeholder="Specify here">
  </mat-form-field>
  </form>
  </div>
  `,
  styles: [
    `
    .rad-button {width: 100%; margin-top: 10px; margin-bottom: 10px } 
    #target-type {
      margin-top: 20px;
      margin-left: 5px;
      margin-right: 5px;
      padding: 5px;
    }
    `
  ]
})


export class TargetTypeComponent implements OnInit {

  constructor() { }
  selectedTargetType: string
  targetTypes: string[] = ['Science', 'Flux Standard', 'Telluric Standard', 'Other']
  otherType:  string = "Specify here"

  ngOnInit(): void {
  }

}
