import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  message: string = '';
  registerData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any) {
      this.registerData = {};
     }

  ngOnInit(): void {
  }

  updateRole(){
    let name =this.registerData.name;
    let email =this.registerData.email;
    console.log(name);
    
    if(!name && !email){
      this.message = 'Failed process: Imcomplete data';
      this.openSnackBarError();
    }else{
      this.message = 'Successfull user registration';
      this.openSnackBarSuccesfull();
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }
  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}
