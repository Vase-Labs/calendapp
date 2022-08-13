import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class CausasService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

  listar(sucursal : any , jurisdiccion : any) {
    return this.http.post<any[]>(`${this.url}/causas/materia/${sucursal}`, jurisdiccion , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarTodos(token,enterprise,area){
    return this.http.get<any[]>(`${this.url}/causa/area/${area}`, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , "Bearer "+token )
      .set('enterpriseId' , enterprise)   
    });
  }
  listar20(sucursal : any , jurisdiccion : any) {
    return this.http.post<any[]>(`${this.url}/causas/20/materia/${sucursal}`, jurisdiccion , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarNoTerminadas(sucursal : any , jurisdiccion : any) {
    return this.http.post<any[]>(`${this.url}/causas/noTerminadas/materia/${sucursal}`, jurisdiccion , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarByCondicion(causa : any ){
    return this.http.post<any[]>(`${this.url}/causas/condicion`, causa , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(causa : any){
    return this.http.post<any[]>(`${this.url}/causas/`, causa ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,causa : any){
    return this.http.put<any[]>(`${this.url}/causas/${id}`, causa ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarNuevos(){
    return this.http.get<any[]>(`${this.url}/causas/nuevas`,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarReporte(fechas){
    return this.http.post<any[]>(`${this.url}/causas/reporte`,fechas,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarCausa(id:string){
    return this.http.get<any[]>(`${this.url}/causas/${id}`,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:number){
    return this.http.delete<any[]>(`${this.url}/causas/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
