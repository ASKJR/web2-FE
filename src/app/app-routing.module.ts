import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alunos',
    loadChildren: () =>
      import('../app/aluno/aluno.module').then((m) => m.AlunoModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('../app/curso/curso.module').then((m) => m.CursoModule),
  },
  {
    path: '',
    redirectTo: 'alunos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
