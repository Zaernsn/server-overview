import { Component, inject, OnInit } from '@angular/core';
import { ServerService } from '../../api/service/server.service';
import { Server } from '../../api/model/Server';
import { ServerCardComponent } from '../server-card/server-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-root',
  imports: [
    ServerCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './server-root.component.html',
  styleUrl: './server-root.component.css',
})
export class ServerRootComponent implements OnInit {
  serverService = inject(ServerService);
  servers: Server[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.servers = this.serverService.servers;
  }
}
