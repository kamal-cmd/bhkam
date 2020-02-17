import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BitaService {
url= 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
  addData(firstname,lastname,email,phoneno,message){
   const obj ={firstname,lastname,email,phoneno,message};
   this
      .http
      .post(`${this.url}/add`, obj)
      .subscribe(res => console.log(res));
  }
  getData() {
    return(
      this
       .http
       .get(`${this.url}/view`)
    );
  }
  upData(id, name){
    const obj = {name};
    this
    .http
    .post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log(res));
  }
  delData(id){
    return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id){
    return this
    .http
    .get(`${this.url}/edit/${id}`);
  }
  up_data(firstname,lastname,email,phoneno,message, id){
    const obj ={
      firstname:firstname,
      lastname:lastname,
      email:email,
      phoneno:phoneno,
      message:message
    };
    this
     .http
     .post(`${this.url}/update/${id}`, obj)
     .subscribe(res=> console.log('Done'));
  }
}
