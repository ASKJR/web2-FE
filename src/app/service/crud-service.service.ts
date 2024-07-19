import { Inject, Injectable } from '@angular/core';
import { Iidentification } from '../shared/interfaces';
import { ICrud } from '../shared/interfaces';
import { localStorageKey } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService<T extends Iidentification> implements ICrud<T> {
  private LS_CHAVE = '';
  constructor(@Inject('chaveLocalStorage') chaveLocalStorage: localStorageKey) {
    this.LS_CHAVE = chaveLocalStorage;
  }
  inserir(object: T): void {
    const objects = this.listarTodos();
    object.id = new Date().getTime();
    objects.push(object);
    localStorage[this.LS_CHAVE] = JSON.stringify(objects);
  }

  buscarPorId(id: number): T | undefined {
    return this.listarTodos().find((o) => o.id === id);
  }

  atualizar(object: T): void {
    const objects = this.listarTodos();
    const index = objects.findIndex((p) => p.id === object.id);
    if (index !== -1) {
      objects[index] = object;
      localStorage[this.LS_CHAVE] = JSON.stringify(objects);
    }
  }

  remover(id: number): void {
    const objects = this.listarTodos().filter((p) => p.id !== id);
    localStorage[this.LS_CHAVE] = JSON.stringify(objects);
  }

  listarTodos(): T[] {
    const objects = localStorage[this.LS_CHAVE];
    return objects ? JSON.parse(objects) : [];
  }
}
