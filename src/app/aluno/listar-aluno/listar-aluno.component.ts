import { Component } from '@angular/core';
import { Aluno } from '../../shared';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CrudServiceService } from '../../service/crud-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
})
export class ListarAlunoComponent {
  constructor(
    private alunoService: CrudServiceService<Aluno>,
    private modalService: NgbModal
  ) {}
  alunos: Aluno[] = [];
  ngOnInit(): void {
    this.alunos = this.listarTodos();
  }
  listarTodos(filter?: string): Aluno[] {
    this.alunoService.listarTodos(filter).subscribe({
      next: (data: Aluno[] | null) => {
        if (data == null) {
          this.alunos = [];
        } else {
          this.alunos = data;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
    return this.alunos;
  }
  filtrarAlunos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.alunos = this.listarTodos();
    } else {
      this.alunos = this.listarTodos(filtroParaNome);
    }
  }
  removerAluno(aluno: Aluno) {
    this.alunoService.remover(aluno.id!).subscribe({
      complete: () => {
        this.listarTodos();
      },
      error: (err) => {
        console.log(err);
      },
    });

    Swal.fire({
      title: 'Removido(a)!',
      text: 'O(A) aluno(a) selecionado(a) foi removido(a) da base de dados.',
      icon: 'success',
    });
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
  abrirAlunoModal(aluno: Object) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.object = aluno;
    modalRef.componentInstance.title = 'Aluno';
  }
}
