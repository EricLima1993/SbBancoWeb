import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-CartaoSolicitar',
  templateUrl: './CartaoSolicitar.component.html',
  styleUrls: ['./CartaoSolicitar.component.scss']
})
export class CartaoSolicitarComponent implements OnInit {

  public cliente : any;
  public cartao: Cartao = new Cartao();

  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public solicitar(bandeira: String,limite:String,nome:String,validade:String,senha:String):void{
    this.cartao.limiteMax = limite;
    this.cartao.limite = limite;
    this.cartao.nomeCartao = nome;
    this.cartao.validade = validade;
    this.cartao.senha = senha;

    this.http.post("http://localhost:8080/cartoes/solicitacao?id="+this.cliente.id+"&bandeira="+bandeira,this.cartao).subscribe();
    this.router.navigateByUrl('/usuario');
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }

}

class Cartao{
  limiteMax: any;
  limite: any;
  nomeCartao: any;
  validade: any;
  senha: any;
}
