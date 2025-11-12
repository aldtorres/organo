import { Component, input } from '@angular/core';
import { ILivro } from './ILivro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  //
  //Propriedade Signal()/Input - https://angular.dev/guide/components/inputs#required-inputs
  //Obs.: livro => this.livro().favorito
  livro = input.required<ILivro>();
  //
  //
  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito;
  }
}
