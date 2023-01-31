import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IServico } from 'src/app/servicos';
import { ServicosService } from 'src/app/servicos.service'

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.css']
})
export class DetalhesServicoComponent implements OnInit {
  servico: IServico | undefined;
  quantidade = 1;

  constructor(
    private servicosService: ServicosService,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const routeParams =  this.route.snapshot.paramMap;
    const servicoId = Number(routeParams.get('id'));
    this.servico = this.servicosService.getOne(servicoId);
  }
}
