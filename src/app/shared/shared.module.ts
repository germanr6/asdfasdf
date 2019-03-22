import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { SnackBarService } from './snackbar.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackBarService]
})
export class SharedModule {}
