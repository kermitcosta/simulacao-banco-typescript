import { Cliente } from "./Cliente.js"

export abstract class Conta {

    private _cliente: Cliente
    private _numero: string
    private _saldo = 0

    constructor(numero: string, cliente: Cliente) {

        this._cliente = cliente
        this._numero = numero
        cliente.addConta(this)

    }

    public get cliente(): Cliente {
        return this._cliente
    }

    public get numero(): string {
        return this._numero
    }

    public get saldo(): number {
        let saldo = this._saldo
        return parseFloat(saldo.toFixed(4))
    }

    public set saldo(saldo: number) {
        this._saldo = saldo
    }

    public abstract depositar(valor: number): void

    public abstract sacar(valor: number): void

}