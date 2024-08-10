import { Component } from '@angular/core';
import { Curso } from '../../shared';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CrudServiceService } from '../../service/crud-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
})
export class ListarCursoComponent {
  constructor(
    private cursoService: CrudServiceService<Curso>,
    private modalService: NgbModal
  ) {}
  cursos: Curso[] = [];
  ngOnInit(): void {
    this.cursos = this.listarTodos();
  }
  listarTodos(filter?: string): Curso[] {
    this.cursoService.listarTodos(filter).subscribe({
      next: (data: Curso[] | null) => {
        if (data == null) {
          this.cursos = [];
        } else {
          this.cursos = data;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
    return this.cursos;
  }
  filtrarCursos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.cursos = this.listarTodos();
    } else {
      this.cursos = this.listarTodos(filtroParaNome);
    }
  }
  removerCurso(curso: Curso) {
    this.cursoService.remover(curso.id!).subscribe({
      complete: () => {
        this.listarTodos();
      },
      error: (err) => {
        console.log(err);
      },
    });

    Swal.fire({
      title: 'Removido!',
      text: 'O curso selecionado foi removido da base de dados.',
      icon: 'success',
    });
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
  abrirCursoModal(curso: Object) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.object = curso;
    modalRef.componentInstance.title = 'Curso';
  }
}
