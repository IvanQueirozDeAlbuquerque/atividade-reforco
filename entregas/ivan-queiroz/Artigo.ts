import { MateriaisLiteratura } from "./MateriasLiteratura";

class Artigo implements MateriaisLiteratura {
    autor: string;
    titulo: string;
    data: Date

    constructor(autor: string, titulo: string, data:Date){
        this.autor = autor
        this.titulo = titulo
        this.data = data
    }

    exibirDetalhe(): void {
        console.log(`autor: ${this.autor}\ntitulo: ${this.titulo}\ndata: ${this.data}`)
    }
}

const meuArtigo = new Artigo ("rebafebr", "bnaeipe", new Date("2025-04-04"))
meuArtigo.exibirDetalhe()