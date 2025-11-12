import { Component } from '@angular/core';
import { IGeneroLiterario, ILivro } from '../livro/ILivro';
import { map } from 'rxjs';

@Component({
  selector: 'app-lista-livros',
  imports: [],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {

  agrupaGeneros :IGeneroLiterario[] = [];

  livrosPorGenero: Map<string, ILivro[]> = new Map();


}
