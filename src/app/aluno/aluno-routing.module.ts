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
    path: 'alunos/listar',
    component: ListarAlunoComponent,
  },
  {
    path: 'alunos/novo',
    component: VisualizarInserirEditarAlunoComponent,
  },
  {
    path: 'alunos/editar/:id',
    component: VisualizarInserirEditarAlunoComponent,
  },
  {
    path: 'alunos/visualizar/:id',
    component: VisualizarInserirEditarAlunoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
