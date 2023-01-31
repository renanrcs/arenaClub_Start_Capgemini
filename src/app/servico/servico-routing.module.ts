import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesServicoComponent } from './detalhes-servico/detalhes-servico.component';
import { ServicoComponent } from './servico.component';

const routes: Routes = [
  { path: '', component: ServicoComponent },
  { path: ':id', component: DetalhesServicoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
