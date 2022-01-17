import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public cliente : any;
  constructor(private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }
  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
