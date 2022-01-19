import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-PagarFatura',
  templateUrl: './PagarFatura.component.html',
  styleUrls: ['./PagarFatura.component.scss']
})
export class PagarFaturaComponent implements OnInit {

  public cliente : any;
  public cartaoI: Cartao = new Cartao();
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public pagar(cartaoN: String):void{
    for(let cartao of this.cliente.cartoes){
      if(cartao.numero == cartaoN){
        this.cartaoI.id = cartao.id;
        this.cartaoI.senha = cartao.senha;
        this.cartaoI.valor = cartao.limiteMax - cartao.limite;
      }

      this.http.put("http://localhost:8080/cartoes/pagar?valor="+this.cartaoI.valor+"&id="+this.cliente.id, this.cartaoI).subscribe();
      this.router.navigateByUrl('/usuario');

    }
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }

}

class Cartao{
  id: any;
  senha: any;
  valor: any;
}
