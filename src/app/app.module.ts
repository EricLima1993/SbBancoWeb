import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { NavLoginComponent } from './navLogin/navLogin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [					
    AppComponent,
    PrincipalComponent,
      NavComponent,
      NavLoginComponent,
      UsuarioComponent,
      CartoesComponent,
      TransferenciaComponent,
      CadastroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
