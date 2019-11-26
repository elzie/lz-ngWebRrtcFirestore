import { Component, OnInit } from '@angular/core';
import { SignalServerService } from './../../services/signal-server.service';

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
  persons;
  selectedPerson = 'temp-id';
  ngOnInit() {
    this.getPersons();
  }

  //addPerson = person => this.server.addPersonToServer(this.selectedPerson);

  getPersons = () => {
    console.log('** get persons 2 ');

    this.signalServer.
      getPersons().subscribe(res => {
        (this.persons = res);
        console.log(res[0].payload.doc);
      });
  }

  selectEntry(personId) {
    // console.log(personId);
    this.selectedPerson = personId;
    this.server.selectPersonFromServer(this.selectedPerson);
  }
}
