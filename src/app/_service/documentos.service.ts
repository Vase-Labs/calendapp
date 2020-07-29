import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class DocumentosService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/documentos/`,   {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  copiar(origen,destino){
    let documento = {pathOrigen : origen,pathDestino:destino};
    return this.http.post<any[]>(`${this.url}/copiarDocumentos/`, documento ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(documento : any){
    return this.http.post<any[]>(`${this.url}/documentos/`, documento ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,documento : any){
    return this.http.put<any[]>(`${this.url}/documentos/${id}`, documento ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string){
    return this.http.delete<any[]>(`${this.url}/documentos/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  agregarNota(nota){
    return this.http.post<any[]>(`${this.url}/notas/`, nota ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarNota(id){
    return this.http.post<any[]>(`${this.url}/notas/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
