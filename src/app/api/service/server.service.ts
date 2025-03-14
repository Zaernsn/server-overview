import { Injectable } from '@angular/core';
import { Server } from '../model/Server';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private serversSubject = new BehaviorSubject<Server[]>([]);
  servers$ = this.serversSubject.asObservable();

  constructor() {
    this.setServer();
  }

  get servers() {
    return this.serversSubject.value;
  }

  setServer() {
    this.serversSubject.next(this.extractServers(this.jsonData));
  }

  addServer(server: Server) {
    const updatedServers = [server, ...this.serversSubject.value];
    this.serversSubject.next(updatedServers);
  }

  extractServers(data: any, servers: Server[] = []): Server[] {
    if (data && typeof data === 'object') {
      if (data.server) {
        servers.push(data.server);
      }
      for (const key in data) {
        this.extractServers(data[key], servers);
      }
    }
    return servers;
  }

  jsonData = {
    acai: true,
    ackee: 'abc',
    apple: {
      date: {
        durian: {
          server: {
            label: 'Durian',
            active: true,
          },
        },
      },
      elderberry: [
        {
          fig: null,
          huckleberry: {
            server: {
              label: 'Huckleberry',
              active: true,
            },
          },
        },
        {
          gooseberry: false,
          server: {
            label: 'Elderberry',
            active: false,
          },
        },
      ],
    },
    apricot: 123,
    avocado: 'abc',
    banana: false,
    belfruit: '123',
    bilberry: 'abc',
    blackberry: [
      {
        boysenberry: 123,
        dewberry: '123',
      },
      {
        grapefruit: 123,
        guava: '123',
      },
    ],
    blueberry: 123,
    breadfruit: false,
    server: {
      label: 'Kiwi',
      active: false,
    },
    breadnut: null,
    canistel: 'abc',
  };
}
