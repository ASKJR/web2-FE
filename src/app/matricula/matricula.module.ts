import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { VisualizarInserirEditarMatriculaComponent } from './visualizar-inserir-editar-matricula/visualizar-inserir-editar-matricula.component';



@NgModule({
  declarations: [
    ListarMatriculaComponent,
    VisualizarInserirEditarMatriculaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatriculaModule { }
