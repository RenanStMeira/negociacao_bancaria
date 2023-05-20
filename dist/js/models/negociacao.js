export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //Acessar atributos privados da classe para ler (get apenas leitura nao é possivel atribuir)
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return Number(this._quantidade) * Number(this._valor);
    }
}
