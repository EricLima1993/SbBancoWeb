import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  _conta: String = "";
  _valor: String = "";
  _senha: String = "";
  public cliente: any

  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public transferir(_conta:String,_valor:String,_senha:String):void{
    this.http.put("http://localhost:8080/conta/transferir?numCon="+this.cliente.conta.numeroConta+"&senha="+_senha+"&numConT="+_conta+"&vTrans="+_valor+"&idP="+this.cliente.id , this.cliente).subscribe();
    this.router.navigateByUrl('/usuario');
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
