import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-Poupanca',
  templateUrl: './Poupanca.component.html',
  styleUrls: ['./Poupanca.component.scss']
})
export class PoupancaComponent implements OnInit {

  public cliente : any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public solicitar(){
    this.http.post("http://localhost:8080/contapoupanca/solicitar?id="+this.cliente.id, null).subscribe();
    this.router.navigateByUrl('/usuario');
  }

  public cancelar(){
    this.http.delete("http://localhost:8080/contapoupanca/cancelar/"+this.cliente.contaP.numeroConta+"?idC="+this.cliente.id).subscribe();
    this.router.navigateByUrl('/usuario');
  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
