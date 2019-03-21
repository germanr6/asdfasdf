import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [CommonModule, RouterModule, NavComponent, HeaderComponent]
})
export class UiModule {}
