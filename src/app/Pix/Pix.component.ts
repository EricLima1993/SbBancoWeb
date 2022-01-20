import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Service/userService.service';

@Component({
  selector: 'app-Pix',
  templateUrl: './Pix.component.html',
  styleUrls: ['./Pix.component.scss']
})
export class PixComponent implements OnInit {

  public cliente : any;
  public pix : any;
  public codigoG : String = "";
  public a:any;
  constructor(private http: HttpClient,private router: Router,private us: UserServiceService) { }

  ngOnInit() {
    this.dadosCliente();
  }

  public gerar(valor: String){
    this.http.post("http://localhost:8080/pix/gerar?id="+this.cliente.id+"&valor="+valor,null).subscribe(Response => this.pix = Response);


  }

  public mostrar(){
    this.codigoG = "<h6>O codigo do pix: "+this.pix.codigo+" </h6>";
  }

  public pagar(codigo:String):void{
    this.http.put("http://localhost:8080/pix/pagar?idPagante="+this.cliente.id+"&codigo="+codigo,null).subscribe();
    this.router.navigateByUrl('/usuario');
  }


  public dadosCliente():void{
    this.cliente = UserServiceService.getCliente();
  }
}
