import { Component, OnInit } from '@angular/core';
import {IServico} from '../servicos';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  servicos: IServico[] | undefined;

  constructor(
    private servicosService: ServicosService
  ) { }

  ngOnInit(): void {
    this.servicos = this.servicosService.getAll();
  }
}
