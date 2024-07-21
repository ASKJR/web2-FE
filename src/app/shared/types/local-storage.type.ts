import { InjectionToken } from '@angular/core';
export type localStorageKey = 'alunos' | 'cursos';

export const CURSO_LOCAL_STORAGE_KEY = new InjectionToken<string>(
  'CursoLocalStorageKey'
);
export const ALUNO_LOCAL_STORAGE_KEY = new InjectionToken<string>(
  'AlunoLocalStorageKey'
);
