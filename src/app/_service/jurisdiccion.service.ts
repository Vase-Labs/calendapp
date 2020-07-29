import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class JurisdiccionService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/juridisccions`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(juridisccion : any){
    return this.http.post<any[]>(`${this.url}/juridisccions/`, juridisccion ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,juridisccion : any){
    return this.http.put<any[]>(`${this.url}/juridisccions//${id}`, juridisccion ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string) {
    return this.http.delete<any[]>(`${this.url}/juridisccions/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
