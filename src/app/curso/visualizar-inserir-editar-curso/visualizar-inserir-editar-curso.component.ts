import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '../../shared/models/curso.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visualizar-inserir-editar-curso',
  templateUrl: './visualizar-inserir-editar-curso.component.html',
})
export class VisualizarInserirEditarCursoComponent {
  @ViewChild('formCurso') formCurso!: NgForm;
  curso: Curso = new Curso();
  isEdit: boolean = false;
  isViewMode: boolean = false;

  constructor(
    private cursoService: CrudServiceService<Curso>,
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
      const fetchedCurso = this.cursoService.buscarPorId(+idParam);

      if (fetchedCurso !== undefined) {
        this.curso = fetchedCurso;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Curso não encontrado.',
        });
        this.router.navigate(['/cursos']);
      }
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
    if (this.formCurso.form.valid) {
      this.cursoService.inserir(this.curso);
      Swal.fire({
        title: 'Sucesso',
        text: 'O Curso foi criado na base de dados.',
        icon: 'success',
      });
      this.router.navigate(['/cursos']);
    }
  }
  editar(): void {
    if (this.formCurso.valid) {
      this.cursoService.atualizar(this.curso);
      Swal.fire({
        title: 'Sucesso',
        text: 'Suas alterações foram salvas na base de dados.',
        icon: 'success',
      });
      this.router.navigate(['/cursos']);
    }
  }
}
