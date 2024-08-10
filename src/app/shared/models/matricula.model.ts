import { Aluno } from './aluno.model';
import { Curso } from './curso.model';

export class Matricula {
  constructor(
    public id?: number,
    public aluno?: Aluno,
    public curso?: Curso,
    public dataMatricula?: string,
    public nota?: number
  ) {}
}
