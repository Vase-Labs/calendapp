import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class FormatosService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/formatos/`,   {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  ListarTramitacion() {
    return this.http.get<any[]>(`${this.url}/formatos/tramitacion/`,   {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(formato : any){
    return this.http.post<any[]>(`${this.url}/formatos/`, formato ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  actualizar(id:number,formato : any){
    return this.http.put<any[]>(`${this.url}/formatos/${id}`, formato ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:number){
    return this.http.delete<any[]>(`${this.url}/causas/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
