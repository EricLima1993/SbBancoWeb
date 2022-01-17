import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private cliente : any;

  private static clienteLogado : any;

  constructor(private http: HttpClient) { }


  public login(cpf: String,senha: String):any{

    this.http.get("http://localhost:8080/principal/login?cpf="+cpf+"&senha="+senha).subscribe(Response => this.cliente = Response);
    return this.cliente;
  }

  public static setCliente(cli: any):void{
    UserServiceService.clienteLogado = cli;
  }

  public static getCliente():any{
    return UserServiceService.clienteLogado;
  }
}


