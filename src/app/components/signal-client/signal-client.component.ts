import { Component, OnInit } from '@angular/core';
import { SignalServerService } from 'src/app/services/signal-server.service';

@Component({
  selector: 'app-signal-client',
  templateUrl: './signal-client.component.html',
  styleUrls: ['./signal-client.component.scss']
})
export class SignalClientComponent implements OnInit {

  constructor(
    public signalServer: SignalServerService
  ) { }
  server = this.signalServer;
  ngOnInit() {
  }

}
