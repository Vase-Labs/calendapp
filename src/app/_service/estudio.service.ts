import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class EstudioService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/estudios`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(estudio : any){
    return this.http.post<any[]>(`${this.url}/estudios/`, estudio ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,estudio : any){
    return this.http.put<any[]>(`${this.url}/estudios/${id}`, estudio ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string) {
    return this.http.delete<any[]>(`${this.url}/estudios/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
