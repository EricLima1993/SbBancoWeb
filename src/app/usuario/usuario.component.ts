import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public cliente : any;
  public numeroP: String = "";
  constructor(private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
    if(this.cliente.contaP != null){
      this.numeroP = " O numero da sua conta poupança é: "+this.cliente.contaP.numeroConta;
    }
  }
  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
