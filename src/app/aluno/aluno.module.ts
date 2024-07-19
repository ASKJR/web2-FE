import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { VisualizarInserirEditarAlunoComponent } from './visualizar-inserir-editar-aluno/visualizar-inserir-editar-aluno.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlunoRoutingModule } from './aluno-routing.module';
import { CrudServiceService } from '../service/crud-service.service';
import { Aluno } from '../shared/models/aluno.model';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [ListarAlunoComponent, VisualizarInserirEditarAlunoComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild(),
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    {
      provide: CrudServiceService<Aluno>,
      useFactory: () => new CrudServiceService<Aluno>('alunos'),
    },
    provideNgxMask(),
  ],
})
export class AlunoModule {}
