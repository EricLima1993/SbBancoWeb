import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public cliente: ClienteCadastro = new ClienteCadastro();
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  public cadastrar(nome:String,cpf:String,senha:String,logradouro:String,bairro:String,cidade:String,numero:String,uf:String,):void{
    this.cliente.nome = nome;
    this.cliente.cpf = cpf;
    this.cliente.senha = senha;
    this.cliente.endereco.logradouro = logradouro;
    this.cliente.endereco.bairro = bairro;
    this.cliente.endereco.cidade = cidade;
    this.cliente.endereco.numero = numero;
    this.cliente.endereco.uf = uf;

    this.http.post("http://localhost:8080/principal/cadastrar",this.cliente).subscribe();
    this.router.navigateByUrl('/principal');
  }
}

class ClienteCadastro{
  nome: any;
  cpf: any;
  senha: any;
  endereco: Endereco = new Endereco();
    constructor() {
   }
}

class Endereco{
  logradouro: any;
  cidade: any;
  bairro: any;
  numero: any;
  uf: any;
}
