import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-mudarEndereco',
  templateUrl: './mudarEndereco.component.html',
  styleUrls: ['./mudarEndereco.component.scss']
})
export class MudarEnderecoComponent implements OnInit {

  public cliente : any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public mudar(logradouro:String,bairro:String,cidade:String,numero:String,uf:String):void{
    this.cliente.endereco.logradouro = logradouro;
    this.cliente.endereco.bairro = bairro;
    this.cliente.endereco.cidade = cidade;
    this.cliente.endereco.numero = numero;
    this.cliente.endereco.uf = uf;
    this.http.put("http://localhost:8080/principal/alterar/"+this.cliente.id,this.cliente).subscribe();
    this.router.navigateByUrl('/principal');
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }

}
