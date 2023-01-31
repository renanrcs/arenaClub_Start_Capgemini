import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesServicoComponent } from './servico/detalhes-servico/detalhes-servico.component';

const routes: Routes = [
  { path: 'servico', loadChildren: () => import('./servico/servico.module').then(m => m.ServicoModule) },
  { path: "", redirectTo: "servico", pathMatch: "full"},
  { path: ':id', component: DetalhesServicoComponent },
  { path: "**", component: NaoEncontradoComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
