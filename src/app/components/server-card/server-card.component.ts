import { Component, effect, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Server } from '../../api/model/Server';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'server-card',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgClass,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.css',
})
export class ServerCardComponent {
  server = input.required<Server>();

  editMode: boolean = false;
  labelCtrl: FormControl = new FormControl('');

  constructor() {
    effect(() => {
      this.labelCtrl.setValue(this.server().label);
    });
  }
}
