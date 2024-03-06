import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Child } from '../../models/child';
import { ChildService } from '../services/child.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatNoDataRow } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-childs-list',
  standalone: true,
  imports: [MatCardModule,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatSortHeader,
    MatCellDef,
    MatCell,
    MatIconButton,
    MatIcon,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatNoDataRow,
    MatPaginator,],
  templateUrl: './childs-list.component.html',
  styleUrl: './childs-list.component.scss'
})
export class ChildsListComponent implements AfterViewInit {
  displayedColumns:String[]=['id','lastname','firstname','classSchool'];
  dataSource = new MatTableDataSource<Child>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private childService : ChildService, private router : Router){
  }

  ngAfterViewInit(): void {
    this.childService.getAllChilds().subscribe(childs => {
      this.dataSource.data = childs;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onChildClick(childId : number):void{
    this.router.navigateByUrl(`childs/${childId}`)
  }
}
