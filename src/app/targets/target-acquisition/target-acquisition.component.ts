import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-acquisition',
  template: `
  <div id="target-acquisition" class="mat-elevation-z8">
  <h3>Target acquisition:</h3>
  <form>
    <mat-radio-group
    aria-labelledby="radio-group-label"
    class="radio-group"
    [(ngModel)]="selectedTargetAcq">
    <mat-radio-button class="rad-button" *ngFor="let targetAcq of targetAcqs" [value]="targetAcq">
      {{targetAcq}}
    </mat-radio-button>
    </mat-radio-group>
  </form>
  </div>
  `,

  styles: [
    `
    .rad-button {width: 100%; margin-top: }
    #target-acquisition {
      margin-top: 20px;
      margin-left: 5px;
      margin-right: 5px;
      padding: 5px;
    }
    `
  ]
})
export class TargetAcquisitionComponent implements OnInit {

  constructor() { }
  
  selectedTargetAcq: string
  targetAcqs: string[] = ['Direct', 'Offset star', 'Long slit', 'SAT', 'AO']

  ngOnInit(): void {
  }

}
