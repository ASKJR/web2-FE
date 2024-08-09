import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Aluno,
  convertStringToDBDate,
  convertDBDateToString,
} from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import { cpf } from 'cpf-cnpj-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visualizar-inserir-editar-aluno',
  templateUrl: './visualizar-inserir-editar-aluno.component.html',
})
export class VisualizarInserirEditarAlunoComponent {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  isEdit: boolean = false;
  isViewMode: boolean = false;
  isCpfValid: boolean = false;
  isCpfDuplicated: boolean = false;

  constructor(
    private alunoService: CrudServiceService<Aluno>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  listarTodos(): Aluno[] {
    this.alunoService.listarTodos().subscribe({
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

  ngOnInit(): void {
    this.alunos = this.listarTodos();
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      this.alunoService.buscarPorId(+idParam).subscribe({
        next: (a) => {
          if (a != null) {
            a.nascimento = convertDBDateToString(a.nascimento!);
            this.aluno = a;
          } else {
            console.log('error');
          }
        },
        error: (_err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aluno(a) não encontrado.',
          });
          this.router.navigate(['/alunos']);
        },
      });
    } else {
      this.isEdit = false;
      this.isViewMode = false;
    }
  }

  onCpfChange() {
    this.isCpfValid = cpf.isValid(this.aluno.cpf!);
    this.isCpfDuplicated =
      this.alunos.filter((a) => a.cpf === cpf.format(this.aluno.cpf!)).length >
      0;
  }

  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }

  inserir(): void {
    if (this.formAluno.form.valid && this.isCpfValid && !this.isCpfDuplicated) {
      this.aluno.cpf = cpf.format(this.aluno.cpf!);
      this.aluno.nascimento = convertStringToDBDate(this.aluno.nascimento!);
      this.alunoService.inserir(this.aluno!).subscribe({
        next: (_pessoa) => {
          Swal.fire({
            title: 'Sucesso',
            text: 'O(A) Aluno(a) foi criado(a) na base de dados.',
            icon: 'success',
          });
        },
        error: (err) => {
          if (err.status == 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Aluno(a) já existente.',
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

      this.router.navigate(['/alunos']);
    }
  }
  editar(): void {
    if (this.formAluno.valid) {
      this.aluno.cpf = cpf.format(this.aluno.cpf!);
      this.aluno.nascimento = convertStringToDBDate(this.aluno.nascimento!);
      this.alunoService.atualizar(this.aluno!).subscribe({
        next: (_pessoa) => {
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
              text: 'Aluno(a) já existente.',
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
      this.router.navigate(['/alunos']);
    }
  }
}
