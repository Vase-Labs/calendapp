import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class PartesService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/partes/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(materia : any){
    return this.http.post<any[]>(`${this.url}/partes/estudioJuridico/`, materia ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,materia : any){
    return this.http.put<any[]>(`${this.url}/partes/estudioJuridico/${id}`, materia ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarByMateria(id) {
    return this.http.get<any[]>(`${this.url}/causa/partes/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarByJurisdiccion(codigo_jurisdiccion : string){
    return this.http.get<any[]>(`${this.url}/partes/juridisccion/${codigo_jurisdiccion}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertarByJurisdiccion(Jurisdiccion){
    return this.http.post<any[]>(`${this.url}/partes/`, Jurisdiccion ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string) {
    return this.http.delete<any[]>(`${this.url}/partes/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
