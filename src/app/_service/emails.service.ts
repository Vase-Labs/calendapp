import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class EmailService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  enviar(correo : any){
    return this.http.post<any[]>(`${this.url}/email/`, correo ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
