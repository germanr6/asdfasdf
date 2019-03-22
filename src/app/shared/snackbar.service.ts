import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  public openSnackBar(message: string, action?: string, duration?: number) {
    action = action || 'OK';
    duration = duration || 8000;
    return this.matSnackBar.open(message, action, {
      duration
    });
  }
}
