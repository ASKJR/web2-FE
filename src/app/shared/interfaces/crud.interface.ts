export interface ICrud<T> {
  listarTodos(): T[];
  inserir(object: T): void;
  buscarPorId(id: number): T | undefined;
  atualizar(object: T): void;
  remover(id: number): void;
}
