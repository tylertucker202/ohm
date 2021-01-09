import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targets',
  template: `
    <mat-grid-list cols="12" gutterSize="0px" rowHeight="500px">
            <mat-grid-tile
            [colspan]="2"
            [rowspan]="1">
                <app-target-definition></app-target-definition>
            </mat-grid-tile>
            <mat-grid-tile
            [colspan]="2"
            [rowspan]="1">
                <app-target-acquisition></app-target-acquisition>
            </mat-grid-tile>
            <mat-grid-tile
            [colspan]="2"
            [rowspan]="1">
                <app-target-type></app-target-type>
            </mat-grid-tile>
            <mat-grid-tile
            [colspan]="6"
            [rowspan] ="1">
                <app-view-target></app-view-target>
            </mat-grid-tile>
        </mat-grid-list>
    <app-table></app-table>
  `,
  styles: [ 
    `
    mat-grid-tile: {
      align-items: top;
    }
    `
  ]
})
export class TargetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
