import { Component, OnInit, ViewChild} from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource, MatTable } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort
  @ViewChild('table') table: MatTable<PeriodicElement>

  constructor() { }
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  public dataSource: any   
 
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.data = ELEMENT_DATA
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  public apply_filter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    // const prevIndex = this.dataSource.data.findIndex((d) => d === event.item.data);
    // console.log(event, prevIndex)
    moveItemInArray(this.dataSource.data, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }

}
