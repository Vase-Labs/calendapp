import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class EscritosService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listarByCausa(causa : string) {
    return this.http.get<any[]>(`${this.url}/escritos/causa/${causa}` , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarByEstado(estado){
    return this.http.get<any[]>(`${this.url}/escritos/estado/${estado}` , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  listarByRevisor(revisor){
    return this.http.get<any[]>(`${this.url}/escritos/revisor/${revisor}` , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  insertar(escrito : any){
    return this.http.post<any[]>(`${this.url}/escritos/`, escrito ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(causa:string,escrito : any){
    return this.http.put<any[]>(`${this.url}/escritos/${causa}`, escrito ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:number){
    return this.http.delete<any[]>(`${this.url}/causas/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
