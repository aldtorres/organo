import { Component, OnInit } from '@angular/core';
import { IGeneroLiterario, ILivro } from '../livro/ILivro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {

  //hook onInit - antes de ser rendereziado
  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoIdKey = livro.genero.id;


      if(!this.livrosPorGenero.has(generoIdKey)){
        //adiciona chave 
        this.livrosPorGenero.set(generoIdKey, []);
      }

      //agrupa por chave
      this.livrosPorGenero.get(generoIdKey)?.push(livro);

    });


    this.agrupaGeneros = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'drama',
        value: 'Drama',
        livros: this.livrosPorGenero.get("drama") ?? []
      },
      {
        id: 'aventura',
        value: 'Aventura',
        livros: this.livrosPorGenero.get("aventura") ?? []
      }

    ]
    
    console.log(this.agrupaGeneros);
  }

  agrupaGeneros :IGeneroLiterario[] = [];

  livrosPorGenero: Map<string, ILivro[]> = new Map();



}
