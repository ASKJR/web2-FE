import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { VisualizarInserirEditarMatriculaComponent } from './visualizar-inserir-editar-matricula/visualizar-inserir-editar-matricula.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CrudServiceService } from '../service/crud-service.service';
import {
  Matricula,
  MATRICULA_LOCAL_STORAGE_KEY,
  localStorageKey,
  ALUNO_LOCAL_STORAGE_KEY,
  Aluno,
  CURSO_LOCAL_STORAGE_KEY,
  Curso,
} from '../shared';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListarMatriculaComponent,
    VisualizarInserirEditarMatriculaComponent,
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild(),
    NgxMaskDirective,
    NgxMaskPipe,
    NgSelectModule,
  ],
  providers: [
    {
      provide: MATRICULA_LOCAL_STORAGE_KEY,
      useValue: 'matriculas',
    },
    {
      provide: CrudServiceService,
      useFactory: (key: localStorageKey, httpClient: HttpClient) =>
        new CrudServiceService<Matricula>(key, httpClient),
      deps: [MATRICULA_LOCAL_STORAGE_KEY, HttpClient],
    },
    {
      provide: ALUNO_LOCAL_STORAGE_KEY,
      useValue: 'alunos',
    },
    {
      provide: 'AlunoCrudService',
      useFactory: (key: localStorageKey, httpClient: HttpClient) =>
        new CrudServiceService<Aluno>(key, httpClient),
      deps: [ALUNO_LOCAL_STORAGE_KEY, HttpClient],
    },
    {
      provide: CURSO_LOCAL_STORAGE_KEY,
      useValue: 'cursos',
    },
    {
      provide: 'CursoCrudService',
      useFactory: (key: localStorageKey, httpClient: HttpClient) =>
        new CrudServiceService<Curso>(key, httpClient),
      deps: [CURSO_LOCAL_STORAGE_KEY, HttpClient],
    },
    provideNgxMask(),
  ],
})
export class MatriculaModule {}
