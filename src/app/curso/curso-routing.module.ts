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
    path: 'cursos/listar',
    component: ListarCursoComponent,
  },
  {
    path: 'cursos/novo',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'cursos/editar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'cursos/visualizar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
