import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Suma'},
    { codEditora: 2, nome: 'WMF Martins Fontes'},
    { codEditora: 3, nome: 'Rocco'}
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora == codEditora);
    return editora ? editora.nome : '';
  }
}

