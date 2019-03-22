import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import { UiModule } from '../ui/ui.module';
import { SnackBarService } from '../shared/snackbar.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule,
    MatSnackBarModule
  ],
  providers: [SnackBarService]
})
export class HomeModule {}
