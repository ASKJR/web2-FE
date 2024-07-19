import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
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
  ) {
    this.alunos = alunoService.listarTodos();
  }
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      const fetchedAluno = this.alunoService.buscarPorId(+idParam);

      if (fetchedAluno !== undefined) {
        this.aluno = fetchedAluno;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Aluno(a) não encontrado.',
        });
        this.router.navigate(['/alunos']);
      }
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
      this.alunoService.inserir(this.aluno);
      Swal.fire({
        title: 'Sucesso',
        text: 'O(A) Aluno(a) foi criado(a) na base de dados.',
        icon: 'success',
      });
      this.router.navigate(['/alunos']);
    }
  }
  editar(): void {
    if (this.formAluno.valid && this.isCpfValid) {
      this.aluno.cpf = cpf.format(this.aluno.cpf!);
      this.alunoService.atualizar(this.aluno);
      Swal.fire({
        title: 'Sucesso',
        text: 'Suas alterações foram salvas na base de dados.',
        icon: 'success',
      });
      this.router.navigate(['/alunos']);
    }
  }
}
