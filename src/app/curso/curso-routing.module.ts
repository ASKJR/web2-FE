import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { VisualizarInserirEditarCursoComponent } from './visualizar-inserir-editar-curso/visualizar-inserir-editar-curso.component';
const routes: Routes = [
  {
    path: '',
    component: ListarCursoComponent,
  },
  {
    path: 'listar',
    component: ListarCursoComponent,
  },
  {
    path: 'novo',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'editar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'visualizar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
