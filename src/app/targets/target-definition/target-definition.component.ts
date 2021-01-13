import { RowService } from './../row.service';
import { Component, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Target } from './../table-target/table-target.component';

export interface TargetRowForm {
  dname: string;
  name: string
  tooltip?: string;
  value: string;
}

@Component({
  selector: 'app-target-definition',
  template: `
<div id="target-definition" class="mat-elevation-z8">
<h3>Target definition</h3>
<form class="input-form">
  <mat-form-field *ngFor="let col of targetRowForm" class="input-full-width">
    <mat-label>{{col.dname}}</mat-label>
    <input [matTooltip]="col.tooltip" (keyup.enter)="update_value(col)" 
      (blur)="update_value(col)" matInput placeholder={{col.dname}} 
      [(ngModel)]="col.value" [ngModelOptions]="{standalone: true}">
  </mat-form-field>
</form>
<button mat-raised-button #abutton id="raise-button" color="accent" [disabled]="cannotAddRow" (click)="add_to_tbl()">add to table</button>    
</div>

  `,
  styles: [
  `
  .input-form {
  min-width: 100px;
  max-width: 350px;
  width: 100%;
}
  #raise-button {
    margin-bottom:10px;
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

  constructor(private rowService: RowService) { }
  @ViewChild('abutton') buttonRef: MatButton;
  cannotAddRow: boolean = true

  public targetRowForm: TargetRowForm[] = [
    {name: 'name', dname: 'Name', tooltip: 'Target name', value: ''},
    {name: 'position', dname: 'Ra/Dec', tooltip: 'Right ascension/Declination', value: ''},
    {name: 'equinox', dname: 'Equinox', tooltip: 'B1950 or J2000 (default J2000)', value: ''},
    {name: 'magnitude', dname: 'Magnitude', tooltip: 'Relative flux of somthing', value: ''},
    {name: 'pm', dname: 'PmRA/PmDEC', tooltip: 'position motion', value: ''},
    {name: 'pa', dname: 'PA/Rot Mode', tooltip: 'proper angle', value: ''},
    {name: 'offsets', dname: 'Offsets (RA/DEC)', tooltip: 'Target name', value: ''},
  ]
  public target: Target = {}

  ngOnInit(): void {

    this.targetRowForm.forEach( (trf: TargetRowForm) => {
      this.target[trf.name] = trf.value
    })
  
  }


  update_value(col: TargetRowForm): void {
    this.target[col.name] = col.value
    this.validate_target_row()
  }

  validate_target_row(): void {

    //checks if target is good enough to add.
    this.target['name']
    let cannotAddRow=false
    const keys = Object.keys(this.target)
    cannotAddRow = !keys.includes('name')
    this.cannotAddRow = cannotAddRow
  }

  public add_to_tbl(): void {
    console.log('this.target', this.target)
    this.rowService.rowEvent.emit(this.target)
  }

}
