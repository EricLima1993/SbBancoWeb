import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-navLogin',
  templateUrl: './navLogin.component.html',
  styleUrls: ['./navLogin.component.scss']
})
export class NavLoginComponent implements OnInit {

  constructor(private http: HttpClient, private us: UserServiceService, private router: Router) { }

  ngOnInit() {

  }
  _cpf: String="";
  _senha: String="";
  private cliente: any;

  public login(): void {
    this.buscar(this._cpf,this._senha)
    console.log(this.cliente.nome)
    UserServiceService.setCliente(this.cliente);
    this.router.navigateByUrl('/usuario');
    /*if(this.cliente == null)
      console.error("error");
    }else{
      this.router.navigateByUrl('/usuario',this.cliente);
    }*/
    /*this.us.login(this._cpf,this._senha).subscribe(
      () => {
        this.router.navigateByUrl('/usuario');
      },
      (error: any) => {
        this.router.navigateByUrl('/usuario');
        console.error(error);
      });*/
  }

  public buscar(cpf: String,senha: String):void{
   this.http.get("http://localhost:8080/principal/login?cpf="+cpf+"&senha="+senha).subscribe(Response => this.cliente = Response);
  }


}

class ClienteCadastro{
  nome: any;
  cpf: any;
  senha: any;
  endereco: Endereco = new Endereco();
    constructor() {
   }
}

class Endereco{
  logradouro: any;
  cidade: any;
  bairro: any;
  numero: any;
  uf: any;
}
