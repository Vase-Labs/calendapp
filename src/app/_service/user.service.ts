import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

interface Usuario {
  Correo: string;
  Nombres: string;
  Rol : number;
  RolOriginal : number;
  ApellidoPaterno: string;
  ApellidoMaterno : string,
  Direccion : string,
  Numero : string,
}

@Injectable()

export class dbUserService {

  private url: string = `${HOST}`;
  public user_id : string ;
  public Rol : number;
  constructor(private http: HttpClient) { }
  getRol(){
    return this.Rol;
  }
  setRol(number:number){
    this.Rol = number;
  }
  getUser(){
    return this.user_id;
  }
  setUser(id:string){
    this.user_id = id;
  }
  listar() {
    return this.http.get<any[]>(`${this.url}/usuarios/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listarByRol(id:number){
    return this.http.get<any[]>(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id : string, usuario : any) {
    return this.http.put<any[]>(`${this.url}/usuarios/${id}`,usuario, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(usuario : any) {
    return this.http.post<any[]>(`${this.url}/usuarios/`, usuario ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id : string) {
    return this.http.delete<any[]>(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  validarExistencia(correo : string,clave : string) {
    let user = {Correo:correo,Clave:clave};
    return this.http.post<Usuario[]>(`${this.url}/usuarios/validar/`,user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
