import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class ArancelesService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/aranceles/`,   {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  ListarTramitacion() {
    return this.http.get<any[]>(`${this.url}/aranceles/tramitacion/`,   {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(arancel : any){
    return this.http.post<any[]>(`${this.url}/aranceles/`, arancel ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  actualizar(id:number,arancel : any){
    return this.http.put<any[]>(`${this.url}/aranceles/${id}`, arancel ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string){
    return this.http.delete<any[]>(`${this.url}/aranceles/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
