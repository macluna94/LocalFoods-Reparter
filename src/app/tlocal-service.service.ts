import { LoginModel } from './LoginModel';
import { ReparterModel } from './ReparterModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TlocalServiceService {

  url = "http://localhost:5000/api/"
  urlProxy= '/api/repartidor/'
  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  register(datos: ReparterModel){
    let data = JSON.stringify(datos)
    return this.http.post(this.urlProxy+'register', data, { headers: this.headers})
  }

  login(datos: LoginModel){
    let data = JSON.stringify(datos)
    return this.http.post(this.urlProxy+'login', data, { headers: this.headers})
  }
// Pedidos
  getPedidos(){
   return this.http.get('/api/listpedido/disponible')
  }
  getPedido(id: string){
    return this.http.get('/api/pedido/'+id)
  }
  sendPedido(id: string){
    return this.http.get('/api/pedido/update/'+id)
  }

}
