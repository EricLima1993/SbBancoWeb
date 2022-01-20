import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CancelarCartaoComponent } from './CancelarCartao/CancelarCartao.component';
import { CartaoSolicitarComponent } from './CartaoSolicitar/CartaoSolicitar.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { PagarFaturaComponent } from './PagarFatura/PagarFatura.component';
import { PixComponent } from './Pix/Pix.component';
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
  {path: "pagarfatura", component: PagarFaturaComponent},
  {path: "cancelarcartao", component: CancelarCartaoComponent},
  {path: "pix", component: PixComponent},
  {path: "",  redirectTo: "principal" , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
