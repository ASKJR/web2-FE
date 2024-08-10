import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import this

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
    path: 'matriculas',
    loadChildren: () =>
      import('../app/matricula/matricula.module').then(
        (m) => m.MatriculaModule
      ),
  },
  {
    path: '',
    redirectTo: 'alunos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
