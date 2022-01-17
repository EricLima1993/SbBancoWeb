import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss']
})
export class CartoesComponent implements OnInit {

  public cliente : any;

  constructor(private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
