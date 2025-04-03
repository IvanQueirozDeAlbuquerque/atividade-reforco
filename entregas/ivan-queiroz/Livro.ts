import { MateriaisLiteratura } from "./MateriasLiteratura";

class Livro implements MateriaisLiteratura {
    titulo: string;
    autor: string;
    numero: number;


    constructor(titulo: string, autor: string, numero: number) {
        this.autor = autor
        this.titulo = titulo
        this.numero = numero
    }


    exibirDetalhe(): void {
        console.log(`autor: ${this.autor}\ntitulo: ${this.titulo}\nnumero: ${this.numero}`)
    }
}

const meuLivro = new Livro("qelkrjgboui", "adrgbsuip", 34)
meuLivro.exibirDetalhe()