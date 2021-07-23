import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
  const  BaseUrL = environment.basUrl
  const  back = environment.baseBack
@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor( private _http:HttpClient) { 

  }

  GetNews(){
    return this._http.get<any>(BaseUrL).pipe(
      map( resp=>{
        return  resp.articles
      })
    )
  }

  getUser(){
    return  this._http.get('http://localhost:3035/getuser11')
  }

  PostUser(body){
    return  this._http.post<any>('http://localhost:3035/postuser',body)
  }

  CrearUsuario(body){
    return  this._http.post<any>('http://localhost:3035/saveUser',body)
  }
}
