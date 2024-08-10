import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Aluno,
  convertDBDateToString,
  convertStringToDBDate,
  Curso,
  Matricula,
} from '../../shared';
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
  alunos: Aluno[] = [];
  cursos: Curso[] = [];

  constructor(
    private matriculaService: CrudServiceService<Matricula>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject('AlunoCrudService') private alunoService: CrudServiceService<Aluno>,
    @Inject('CursoCrudService') private cursoService: CrudServiceService<Curso>
  ) {}
  ngOnInit(): void {
    this.alunos = this.listarAlunos();
    this.cursos = this.listarCursos();
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      this.matriculaService.buscarPorId(+idParam).subscribe({
        next: (m) => {
          if (m != null) {
            m.dataMatricula = convertDBDateToString(m.dataMatricula!);
            this.matricula = m;
          } else {
            console.log('error');
          }
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Matricula não encontrada.',
          });
          this.router.navigate(['/matriculas']);
        },
      });
    } else {
      this.isEdit = false;
      this.isViewMode = false;
    }
  }

  listarAlunos(filter?: string): Aluno[] {
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

  listarCursos(filter?: string): Curso[] {
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
  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }
  inserir(): void {
    if (this.formMatricula.form.valid) {
      this.matricula.dataMatricula = convertStringToDBDate(
        this.matricula.dataMatricula!
      );
      this.matriculaService.inserir(this.matricula!).subscribe({
        next: (_matricula) => {
          Swal.fire({
            title: 'Sucesso',
            text: 'A Matricula foi criada na base de dados.',
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
      this.matricula.dataMatricula = convertStringToDBDate(
        this.matricula.dataMatricula!
      );
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
