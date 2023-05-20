import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    // Criar instacia da negociação
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    //Pegando elementos do DOM 
    constructor() {
        this.inputData = document.getElementById('data') as HTMLInputElement;
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement;
        this.inputValor = document.getElementById('valor') as HTMLInputElement;
    }
    // Adicionar metodo da classe

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao)
    }

    // Criar metodo
    criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    
    return new Negociacao(date, quantidade, valor);
    }
}