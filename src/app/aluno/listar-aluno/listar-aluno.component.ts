import { Component } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CrudServiceService } from '../../service/crud-service.service';
@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
})
export class ListarAlunoComponent {
  constructor(private alunoService: CrudServiceService<Aluno>) {}
  alunos: Aluno[] = [];
  ngOnInit(): void {
    this.alunos = this.listarTodos();
  }
  listarTodos(): Aluno[] {
    return this.alunoService.listarTodos();
  }
  filtrarAlunos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.alunos = this.listarTodos();
    } else {
      this.alunos = this.listarTodos().filter((aluno) =>
        aluno.nome?.toLocaleLowerCase()?.includes(filtroParaNome.toLowerCase())
      );
    }
  }
  removerAluno(aluno: Aluno) {
    this.alunoService.remover(aluno.id!);
    Swal.fire({
      title: 'Removido(a)!',
      text: 'O(A) aluno(a) selecionado(a) foi removido(a) da base de dados.',
      icon: 'success',
    });
    this.alunos = this.alunoService.listarTodos();
  }

  alertaCofirmaRemoverAluno(nomeAluno: string): SweetAlertOptions {
    return {
      title: `Você realmente deseja remover o(a) aluno(a) ${nomeAluno}?`,
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
