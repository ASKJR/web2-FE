import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { VisualizarInserirEditarCursoComponent } from './visualizar-inserir-editar-curso/visualizar-inserir-editar-curso.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CursoRoutingModule } from './curso-routing.module';
import { CrudServiceService } from '../service/crud-service.service';
import { Curso, CURSO_LOCAL_STORAGE_KEY, localStorageKey } from '../shared';

@NgModule({
  declarations: [ListarCursoComponent, VisualizarInserirEditarCursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [
    {
      provide: CURSO_LOCAL_STORAGE_KEY,
      useValue: 'cursos',
    },
    {
      provide: CrudServiceService,
      useFactory: (key: localStorageKey) => new CrudServiceService<Curso>(key),
      deps: [CURSO_LOCAL_STORAGE_KEY],
    },
  ],
})
export class CursoModule {}
