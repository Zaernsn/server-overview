import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Server } from '../../api/model/Server';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'server-card',
  imports: [MatCardModule,MatIconModule,MatButtonModule,NgClass,MatFormFieldModule,MatInputModule],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.css'
})
export class ServerCardComponent {
 server = input.required<Server>();
 editMode: boolean = false;
}
