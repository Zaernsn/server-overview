import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Server } from '../../api/model/Server';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServerService } from '../../api/service/server.service';

@Component({
  selector: 'app-server-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './server-dialog.component.html',
  styleUrl: './server-dialog.component.css',
})
export class ServerDialogComponent {
  server = inject<Server>(MAT_DIALOG_DATA);
  labelCtrl: FormControl = new FormControl('');
  
  constructor(private dialogRef: MatDialogRef<ServerDialogComponent>,private serverService: ServerService){
    this.labelCtrl.setValue(this.server?.label)
  }

  save(){
    if(this.server){
      this.dialogRef.close(this.labelCtrl.value)
    } else {
      const newServer = {label: this.labelCtrl.value, active: false} as Server
      this.serverService.addServer(newServer)
      this.dialogRef.close()
    }
  }
}
