import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { VisualizarInserirEditarAlunoComponent } from './visualizar-inserir-editar-aluno/visualizar-inserir-editar-aluno.component';
const routes: Routes = [
  {
    path: '',
    component: ListarAlunoComponent,
  },
  {
    path: 'listar',
    component: ListarAlunoComponent,
  },
  {
    path: 'novo',
    component: VisualizarInserirEditarAlunoComponent,
  },
  {
    path: 'editar/:id',
    component: VisualizarInserirEditarAlunoComponent,
  },
  {
    path: 'visualizar/:id',
    component: VisualizarInserirEditarAlunoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
