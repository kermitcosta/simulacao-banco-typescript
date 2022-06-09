import { Conta } from "./Conta.js"
import { SaldoAniversario } from "./SaldoAniversario.js"

export class ContaPoupanca extends Conta {

    private _variacao: number
    private _saldoAniversario = new SaldoAniversario()

    public get saldo(): number {
        return this._saldoAniversario.saldo
    }

    public get variacao(): number {
        return this._variacao
    }

    public set variacao(value: number) {
        this._variacao = value;
    }

    public depositar(valor: number, data: Date = new Date()): void {
        let diaDeposito = data.getDate()
        let mesDeposito = data.getMonth()
        let anoDeposito = data.getFullYear()

        this._saldoAniversario.dia = new Date(anoDeposito, mesDeposito, diaDeposito)
        this._saldoAniversario.saldo = valor
    }

    public sacar(valor: number): void {

        this._saldoAniversario.saldo < valor ? console.log("Saldo insuficiente") : this._saldoAniversario.saldo -= valor

    }

    public resgatar(contaDestino: Conta, valor: number, date: Date) {

        let mesResgate = date.getMonth()
        let diaResgate = date.getDate()

        let mesDeposito = this._saldoAniversario.dia.getMonth()
        let diaDeposito = this._saldoAniversario.dia.getDate()

        let novoMes = 0

        mesDeposito == 11 ? novoMes = 0 : novoMes = (mesDeposito + 1)

        if (mesResgate >= novoMes && diaResgate >= diaDeposito) {
            this._saldoAniversario.saldo -= valor
            contaDestino.depositar(valor)
            console.log("Resgate efetuado")
        } else {
            console.log("Não foi possível realizar o resgate, a data de aniversário ainda não chegou :(")
        }

    }

}