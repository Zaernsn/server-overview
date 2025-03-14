import { Component, inject, OnInit } from '@angular/core';
import { ServerService } from '../../api/service/server.service';
import { Server } from '../../api/model/Server';
import { ServerCardComponent } from '../server-card/server-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ServerDialogComponent } from '../server-dialog/server-dialog.component';

@Component({
  selector: 'app-server-root',
  imports: [
    ServerCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './server-root.component.html',
  styleUrl: './server-root.component.css',
})
export class ServerRootComponent implements OnInit {
  serverService = inject(ServerService);
  servers: Server[] = [];
  filteredServers: Server[] = [];
  searchTerm: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.serverService.servers$.subscribe((servers) => {
      this.servers = servers;
      this.filteredServers = servers;
    });
  }

  addServer() {
   this.dialog.open(ServerDialogComponent, {
      disableClose: true,
    });
  
  }

  filter(value: string) {
    this.searchTerm = value.trim();

    if (!this.searchTerm) {
      this.filteredServers = [...this.servers];
      return;
    }

    this.filteredServers = this.servers.filter((server) =>
      server.label.includes(this.searchTerm)
    );
  }
}
