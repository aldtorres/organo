import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { IGeneroLiterario, ILivro } from '../livro/ILivro';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {

  generoCorrente = input.required<IGeneroLiterario>();
  //livroCorrente : ILivro = livros[0];

}
