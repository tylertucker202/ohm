import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-target-definition',
  template: `
<div id="target-definition" class="mat-elevation-z8">
<h3>Target definition</h3>
<form class="input-form">
  <mat-form-field *ngFor="let col of targetColumns" class="input-full-width">
    <mat-label>{{col}}</mat-label>
    <input matInput placeholder={{coll}}>
  </mat-form-field>
</form>
</div>

  `,
  styles: [
  `
  .input-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

  #target-definition {
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 5px;
      padding: 5px;
    }
.input-full-width {
  width: 100%;
}
  `
  ]
})
export class TargetDefinitionComponent implements OnInit {

  constructor() { }

  public targetColumns: string[] = ["Name", "Ra/Dec", "Equinox", "Magnitude", "PmRA/PmDEC", "PA/Rot Mode", "Offsets (RA/DEC)"]

  ngOnInit(): void {
  }

}
