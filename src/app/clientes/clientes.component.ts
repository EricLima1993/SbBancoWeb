import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public cliente : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.deposito();
    this.login();
  }

  public login():void{
    this.http.get("http://localhost:8080/principal/login?cpf=43764519835&senha=563214").subscribe(Response => this.cliente = Response);

  }

  public deposito(): void{

    this.http.put("http://localhost:8080/conta/deposito?numCon=2&dep=1000",this.cliente).subscribe(Response => this.cliente = Response);

  }
}
