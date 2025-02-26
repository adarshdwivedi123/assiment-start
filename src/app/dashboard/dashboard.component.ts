
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { DashboardService } from '../dashboard.service';
import { People } from '../model/people';
import { Router } from '@angular/router';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  data: any;
  peopleData: any;
  dataSource: any;
  allCharacterData!: any;







  displayedColumns: string[] = ['Name', 'Height', 'Mass', 'HairColor', 'EyeColor'];


  constructor(private _liveAnnouncer: LiveAnnouncer, private DashboardService: DashboardService, private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.getPeopleData();
  }



  getPeopleData() {
    this.DashboardService.getCharacterData().subscribe((res) => {
      //  let data=res;
      this.parseFieldResponse(res)

    })
  }
  parseFieldResponse(res: any) {

    let newData = res['results'];
    this.allCharacterData = new People();
    this.dataSource = newData;
    console.log(JSON.stringify(this.dataSource));



  }
  onRowClicked(row: any) {
    console.log(row);

    this.router.navigate(['./view', row]);


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}


// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();
// }

// announceSortChange(sortState: Sort) {
//   if (sortState.direction) {
//     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
//   } else {
//     this._liveAnnouncer.announce('Sorting cleared');
//   }
// }

// /** Whether the number of selected elements matches the total number of rows. */
// isAllSelected() {
//   const numSelected = this.selection.selected.length;
//   const numRows = this.dataSource.data.length;
//   return numSelected === numRows;
// }

// /** Selects all rows if they are not all selected; otherwise clear selection. */
// toggleAllRows() {
//   if (this.isAllSelected()) {
//     this.selection.clear();
//     return;
//   }

//   this.selection.select(...this.dataSource.data);
// }

// /** The label for the checkbox on the passed row */
// checkboxLabel(row?: PeriodicElement): string {
//   if (!row) {
//     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
//   }
//   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
// }



// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// //Dummy Data added in Table
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];
