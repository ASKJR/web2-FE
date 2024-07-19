import { Component } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CrudServiceService } from '../../service/crud-service.service';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
})
export class ListarCursoComponent {
  constructor(private cursoService: CrudServiceService<Curso>) {}
  cursos: Curso[] = [];
  ngOnInit(): void {
    this.cursos = this.listarTodos();
  }
  listarTodos(): Curso[] {
    return this.cursoService.listarTodos();
  }
  filtrarAlunos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.cursos = this.listarTodos();
    } else {
      this.cursos = this.listarTodos().filter((aluno) =>
        aluno.nome?.toLocaleLowerCase()?.includes(filtroParaNome.toLowerCase())
      );
    }
  }
  removerCurso(aluno: Curso) {
    this.cursoService.remover(aluno.id!);
    Swal.fire({
      title: 'Removido!',
      text: 'O curso selecionando foi removido da base de dados.',
      icon: 'success',
    });
    this.cursos = this.cursoService.listarTodos();
  }

  alertaCofirmaRemoverCurso(nomeCurso: string): SweetAlertOptions {
    return {
      title: `Você realmente deseja remover o curso ${nomeCurso}?`,
      text: 'Não será possível reverter essa ação.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover!',
    };
  }
}
