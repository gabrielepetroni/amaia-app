import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async getActivationCodes() {
    return (
      await getDocs(query(collection(this.firestore, 'actCodes')))
     ).docs.map((codes) => codes.data());
  };

}


