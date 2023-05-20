import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    //Pegando elementos do DOM 
    constructor() {
        this.inputData = document.getElementById('data');
        this.inputQuantidade = document.getElementById('quantidade');
        this.inputValor = document.getElementById('valor');
    }
    // Adicionar metodo da classe
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }
    // Criar metodo
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}
