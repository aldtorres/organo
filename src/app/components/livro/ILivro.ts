export interface ILivro {
    titulo: string;
    autoria: string;
    favorito: boolean;
    genero: IGeneroLiterario;
    imagem: string
}

export interface IGeneroLiterario {
    id: string;
    value: string;
    livros: ILivro[]
}