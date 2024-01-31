import { ServerComponent } from './../server/server.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  allowNewServer = false; // allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers =['TestServer', 'TestServer 2'];

  constructor() {  //class start work
    setTimeout(() => {
      this.allowNewServer = true;  //2s 
    }, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);//input

   // this.serverCreationStatus = 'Server was createdName is '+ this.serverName;
  }

  // onUpdateServerName(){
  //   this.serverName=(<HTMLInputElement>(event).target).value;
  // }
}
