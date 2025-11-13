import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { IGeneroLiterario, ILivro } from '../livro/ILivro';
import { livros } from '../../mock-livros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {

  generoCorrente = input.required<IGeneroLiterario>();
  //livroCorrente : ILivro = livros[0];

}
