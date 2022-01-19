import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-CancelarCartao',
  templateUrl: './CancelarCartao.component.html',
  styleUrls: ['./CancelarCartao.component.scss']
})
export class CancelarCartaoComponent implements OnInit {

  public cliente : any;
  public id:any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public cancelar(cartaoN:String):void{
    for(let cartao of this.cliente.cartoes){
      if(cartao.numero == cartaoN){
        this.id = cartao.id;
      }
    }

    this.http.delete("http://localhost:8080/cartoes/cancelar/"+this.id+"?idC="+this.cliente.id).subscribe();
    this.router.navigateByUrl('/usuario');
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
