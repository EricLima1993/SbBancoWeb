import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartaoSolicitarComponent } from './CartaoSolicitar/CartaoSolicitar.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { PrincipalComponent } from './principal/principal.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: "usuario", component: UsuarioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "cartoes", component: CartoesComponent},
  {path: "transferencia", component: TransferenciaComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "cartaosolicitar", component: CartaoSolicitarComponent},
  {path: "",  redirectTo: "principal" , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
