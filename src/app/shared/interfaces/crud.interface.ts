import { Observable } from 'rxjs';
export interface ICrud<T> {
  listarTodos(filter?: string): Observable<T[] | null>;
  inserir(object: T): Observable<T | null>;
  buscarPorId(id: number): Observable<T | null>;
  atualizar(object: T): Observable<T | null>;
  remover(id: number): Observable<T | null>;
}
