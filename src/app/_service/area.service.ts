import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
export interface Area{
    area: string;
    code: string;
    id: string;
    parties: Array<string>;
    status: boolean;
    subjects: Array<string>;
}

@Injectable()

export class AreaService {

  private url: string = `${HOST}`;

  constructor(private http: HttpClient) { }

    listar(token,enterprise) {
        return this.http.get<Area[]>(`${this.url}/area/active/listByEnterprise/`,   {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization' , "Bearer "+token )
            .set('enterpriseId' , enterprise)   
        }); 
    }
}
