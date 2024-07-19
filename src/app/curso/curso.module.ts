import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { VisualizarInserirEditarCursoComponent } from './visualizar-inserir-editar-curso/visualizar-inserir-editar-curso.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CursoRoutingModule } from './curso-routing.module';
import { CrudServiceService } from '../service/crud-service.service';
import { Curso } from '../shared/models/curso.model';

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
      provide: CrudServiceService<Curso>,
      useFactory: () => new CrudServiceService<Curso>('cursos'),
    },
  ],
})
export class CursoModule {}
