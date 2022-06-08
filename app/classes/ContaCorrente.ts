import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    private _limite: number


    public set cliente(cliente: Cliente) {
        this.checkVip(cliente)
    }

    public get limite(): number {
        return this._limite
    }


    private checkVip(cliente: Cliente) {
        cliente.vip ? this._limite = 3000 : this._limite = 50
    }

    private setLimite(value: number) {
        this._limite = value
    }


    public transferir(contaDestino: Conta, valor: number): void {

        this.sacar(valor)
        contaDestino.depositar

    }

    public sacar(valor: number) {

        if (this.saldo + this._limite > valor) {
            this.saldo -= valor
        }

    }

    public depositar(valor: number) {
        this.saldo += valor
    }

}