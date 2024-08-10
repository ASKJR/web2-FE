import { Component } from '@angular/core';
import { Matricula } from '../../shared';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CrudServiceService } from '../../service/crud-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
})
export class ListarMatriculaComponent {
  constructor(
    private matriculaService: CrudServiceService<Matricula>,
    private modalService: NgbModal
  ) {}
  matriculas: Matricula[] = [];
  ngOnInit(): void {
    this.matriculas = this.listarTodos();
  }
  listarTodos(filter?: string): Matricula[] {
    this.matriculaService.listarTodos(filter).subscribe({
      next: (data: Matricula[] | null) => {
        if (data == null) {
          this.matriculas = [];
        } else {
          this.matriculas = data;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
    return this.matriculas;
  }
  filtrarMatriculas(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.matriculas = this.listarTodos();
    } else {
      this.matriculas = this.listarTodos(filtroParaNome);
    }
  }
  removerMatricula(matricula: Matricula) {
    this.matriculaService.remover(matricula.id!).subscribe({
      complete: () => {
        this.listarTodos();
      },
      error: (err) => {
        console.log(err);
      },
    });

    Swal.fire({
      title: 'Removido(a)!',
      text: 'A matricula selecionada foi removida da base de dados.',
      icon: 'success',
    });
  }

  alertaCofirmaRemoverMatricula(nomeMatricula: string): SweetAlertOptions {
    return {
      title: `Você realmente deseja remover a matricula do Aluno(a) ${nomeMatricula}?`,
      text: 'Não será possível reverter essa ação.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover!',
    };
  }
  abrirMatriculaModal(matricula: Object) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.object = matricula;
    modalRef.componentInstance.title = 'Matricula';
  }
}
