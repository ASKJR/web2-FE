import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Matricula } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visualizar-inserir-editar-matricula',
  templateUrl: './visualizar-inserir-editar-matricula.component.html',
})
export class VisualizarInserirEditarMatriculaComponent {
  @ViewChild('formMatricula') formMatricula!: NgForm;
  matricula: Matricula = new Matricula();
  isEdit: boolean = false;
  isViewMode: boolean = false;

  constructor(
    private matriculaService: CrudServiceService<Matricula>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      this.matriculaService.buscarPorId(+idParam).subscribe({
        next: (p) => {
          if (p != null) {
            this.matricula = p;
          } else {
            console.log('error');
          }
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Matricula não encontrado.',
          });
          this.router.navigate(['/matriculas']);
        },
      });
    } else {
      this.isEdit = false;
      this.isViewMode = false;
    }
  }
  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }
  inserir(): void {
    if (this.formMatricula.form.valid) {
      this.matriculaService.inserir(this.matricula!).subscribe({
        next: (_matricula) => {
          Swal.fire({
            title: 'Sucesso',
            text: 'O Matricula foi criado na base de dados.',
            icon: 'success',
          });
        },
        error: (err) => {
          if (err.status == 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Matricula já existente.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `[${err.status}] ${err.message}`,
            });
          }
        },
      });

      this.router.navigate(['/matriculas']);
    }
  }
  editar(): void {
    if (this.formMatricula.valid) {
      this.matriculaService.atualizar(this.matricula!).subscribe({
        next: (_matricula) => {
          Swal.fire({
            title: 'Sucesso',
            text: 'Suas alterações foram salvas na base de dados.',
            icon: 'success',
          });
        },
        error: (err) => {
          if (err.status == 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Matricula já existente.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `[${err.status}] ${err.message}`,
            });
          }
        },
      });
      this.router.navigate(['/matriculas']);
    }
  }
}
