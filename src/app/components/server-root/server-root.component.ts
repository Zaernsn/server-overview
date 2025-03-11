import { Component, inject, OnInit } from '@angular/core';
import { ServerService } from '../../api/service/server.service';
import { Server } from '../../api/model/Server';
import { ServerCardComponent } from '../server-card/server-card.component';

@Component({
  selector: 'app-server-root',
  imports: [ServerCardComponent],
  templateUrl: './server-root.component.html',
  styleUrl: './server-root.component.css'
})
export class ServerRootComponent implements OnInit {
  serverService = inject(ServerService)
  servers: Server[] = []

  ngOnInit(): void {
    this.servers = this.serverService.servers
  }

}
