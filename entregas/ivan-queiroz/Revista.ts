import { MateriaisLiteratura } from "./MateriasLiteratura";

class Revista implements MateriaisLiteratura {
    autor: string;
    titulo: string;
    edicao: number

    constructor(autor: string, titulo: string, edicao:number){
        this.autor = autor
        this.titulo = titulo
        this.edicao = edicao
    }

    exibirDetalhe(): void {
        console.log(`autor: ${this.autor}\ntitulo: ${this.titulo}\nedicao: ${this.edicao}`)
    }
}

const meuRvista = new Revista ("rebafebr", "bnaeipe", 145)
meuRvista.exibirDetalhe()