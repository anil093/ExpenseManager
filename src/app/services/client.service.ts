import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
import { Client } from '../models/Client';
 
@Injectable()
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDocument: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
 
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }
 
  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
 
        return data;
      });
    }));
 
    return this.clients;
  }
  newClient(client: Client){
    console.log(client);
    this.clientsCollection.add(client)
  }
//   getclient(id:string): Observable<Client>
//   {
// this.clientDoc= this.afs.doc<Client>
//   }
}
