
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/Client';
@Component({
  selector: 'app-clients',
  providers:[ClientService],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

   // gettimng array and using model 
clients: Client[];
// totalOwed:number;
//injection independency 
  constructor(private clientService: ClientService) { 

  
  }

  ngOnInit() {
      // getting data from the cilent observable and subscribing to it
      this.clientService.getClients().subscribe(clients =>
        {
          // this.getTotalOwed();
        console.log(clients)
        this.clients= clients});
        
  }
// getTotalOwed(){
//   const total = this.clients.reduce((total,client) =>{
//     return total + client.balance;
//   },0);
//   this.totalOwed = total;
// }
}




