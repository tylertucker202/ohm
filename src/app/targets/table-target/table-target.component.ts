import { RowService } from './../row.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface Target {
  name?: string;
  position?: string;
  equinox?: number;
  magnitude?: number;
  pm?: number;
  pa?: number;
  offsets?: string; // make me a more accurate type
}


const DEFAULT_TARGET: Target[] = [
  { name: 'Target1', position: '12:30:30 +34:35:21', equinox: 2000, magnitude: 2000, pm: 15, pa:90, offsets:'0 0'},
  { name: 'Target2', position: 	'12:30:31 +34:35:21', equinox:2000, magnitude: 15, pm:15, pa: 135, offsets:'-30 12'},
  { name: 'Target3', position: 	'12:30:31 +34:45:21', equinox:1000, magnitude: 15, pm:15, pa: 135, offsets:'-30 12'},
  { name: 'TargetNeato', position: 	'12:30:31 +34:36:21', equinox:500, magnitude: 15, pm:15, pa: 135, offsets:'-30 92'},
  { name: 'TargetWhyNot?', position: 	'10:30:31 +34:35:21', equinox:2000, magnitude: 45, pm:15, pa: -135, offsets:'-60 12'},
  { name: 'TargetIfEnoughTime...', position: 	'11:30:31 +34:35:21', equinox:2000, magnitude: 85, pm:15, pa: 125, offsets:'-30 12'},
  { name: 'TargetIfLotsOfTime', position: 	'62:30:31 +34:35:21', equinox:2000, magnitude: 15, pm:15, pa: 35, offsets:'-30 12'},
  { name: 'TargetOhPleaseLetMeBeFirst!', position: 	'22:30:31 +34:35:21', equinox:2000, magnitude: 15, pm:15, pa: 135, offsets:'-30 12'},
]

@Component({
  selector: 'app-table-target',
  templateUrl: './table-target.html',
  styleUrls: [ './table-target.css' ]
})
export class TableTargetComponent implements OnInit {
    
  @ViewChild('table') table: MatTable<Target>
  
  constructor(private rowService: RowService, private dialog: MatDialog) { }
  public displayedColumns: string[] = ['position', 'name', 'equinox', 'magnitude', 'pm', 'pa', 'offsets', 'action'] 
  public dataSource: any   

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Target>(DEFAULT_TARGET)
    this.dataSource.data = DEFAULT_TARGET

    this.rowService.rowEvent.subscribe( (row: Target) => {
      console.log('adding new row...',  row)
      this.dataSource.data.push(row)
      this.table.renderRows()
    })

  }
  public apply_filter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

    addRowData(row_obj: Target){
    var d = new Date();
    this.dataSource.data.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }

  updateRowData(tgt: Target){
    this.dataSource.data = this.dataSource.data.filter( (value,key) => {
      if(value.name == tgt.name){
        value = tgt;
      }
      return true;
    });
    console.log('updateRowData', this.dataSource.data)
  }

  deleteRowData(tgt: Target){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.name != tgt.name;
    });
  }

  dropRow(event: CdkDragDrop<Target[]>) {
    moveItemInArray(this.dataSource.data, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }

}
