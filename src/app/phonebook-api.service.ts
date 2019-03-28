import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebookApiService {
  /* url = 'https://0f92f4e9.ngrok.io';*/
   // url = 'http://localhost:3000';
  userRecord = new Subject<any>();
  constructor(private httpClient: HttpClient) { }

  getPhoneBooks() {
    this.httpClient.get<any>('/get').subscribe(res => {
      this.userRecord.next([...res]);
    });
    }

  updatePhoneBook(value: any, _id: string) {
     this.httpClient.put<any>( '/put', {id: _id, name: value.name, phone: value.phone}).subscribe((updateResponse) => {
         this.getPhoneBooks();
     });
  }

  insertPhoneBook(value: any) {
    this.httpClient.post<any>( '/post', {name: value.name, phone: value.phone}).subscribe((insertResponse) => {
        this.getPhoneBooks();
    });
  }

  deleteSinglePhoneBook(id: string) {
    this.httpClient.delete<any>( '/delete/' + id).subscribe((deleteResponse) => {
      this.getPhoneBooks();
    });
  }
}
