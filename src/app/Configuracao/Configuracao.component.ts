import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-Configuracao',
  templateUrl: './Configuracao.component.html',
  styleUrls: ['./Configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  public cliente : any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public cancelamento():void{
    this.http.delete("http://localhost:8080/principal/cancelar/"+this.cliente.id).subscribe();
    this.router.navigateByUrl('/principal');

  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }

}
