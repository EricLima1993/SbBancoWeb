import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-mudarSenha',
  templateUrl: './mudarSenha.component.html',
  styleUrls: ['./mudarSenha.component.scss']
})
export class MudarSenhaComponent implements OnInit {

  public cliente : any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public mudar(senhaNova:String,senha:String):void{
    if(this.cliente.senha == senha){
      this.cliente.senha = senhaNova;
      this.http.put("http://localhost:8080/principal/alterar/"+this.cliente.id,this.cliente).subscribe();
      this.router.navigateByUrl('/principal');
    }

  }

  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
