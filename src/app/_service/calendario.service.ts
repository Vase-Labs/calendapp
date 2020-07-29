import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class CalendarioServices {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/calendario/eventos/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(evento : any){
    return this.http.post<any[]>(`${this.url}/calendario/eventos/`, evento ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
