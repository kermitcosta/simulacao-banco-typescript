import { Conta } from "./Conta.js"
import { ContaCorrente } from "./ContaCorrente.js"

export class ContaPoupanca extends Conta {

    private _variacao: number


    public get variacao(): number {
        return this._variacao
    }

    public set variacao(value: number) {
        this._variacao = value;
    }


    public depositar(valor: number): void {

    }

    public sacar(valor: number): void {
        this.saldo -= valor
    }

    public resgatar(contaDestino: ContaCorrente, valor: number) { }

}