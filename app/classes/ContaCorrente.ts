import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    private _limite: number;

    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor)
        contaDestino.depositar
    }

    public sacar(valor: number): void {
        if (this.saldo <= 0 && this._limite > 0) {
            this._limite -= valor
        }
    }

}