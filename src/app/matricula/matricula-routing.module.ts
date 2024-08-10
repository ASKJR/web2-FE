import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { VisualizarInserirEditarMatriculaComponent } from './visualizar-inserir-editar-matricula/visualizar-inserir-editar-matricula.component';
const routes: Routes = [
  {
    path: '',
    component: ListarMatriculaComponent,
  },
  {
    path: 'listar',
    component: ListarMatriculaComponent,
  },
  {
    path: 'novo',
    component: VisualizarInserirEditarMatriculaComponent,
  },
  {
    path: 'editar/:id',
    component: VisualizarInserirEditarMatriculaComponent,
  },
  {
    path: 'visualizar/:id',
    component: VisualizarInserirEditarMatriculaComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaRoutingModule {}
