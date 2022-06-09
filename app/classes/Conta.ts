import { Cliente } from "./Cliente.js"

export abstract class Conta {

    private _cliente: Cliente
    private _numero: string
    private _saldo = 0

    public set cliente(cliente: Cliente) {
        this._cliente = cliente
    }

    public get cliente(): Cliente {
        return this._cliente
    }

    public get numero(): string {
        return this._numero
    }

    public set numero(value: string) {
        this._numero = value
    }

    public get saldo(): number {
        return this._saldo
    }

    public set saldo(saldo: number) {
        this._saldo = saldo
    }


    public abstract depositar(valor: number): void

    public abstract sacar(valor: number): void

}