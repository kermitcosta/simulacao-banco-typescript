import { Conta } from "./Conta.js"
import { SaldoAniversario } from "./SaldoAniversario.js"

export class ContaPoupanca extends Conta {

    private _variacao: number
    private _depositos: Array<SaldoAniversario> = []

    public get variacao(): number {
        return this._variacao
    }

    public set variacao(value: number) {
        this._variacao = value;
    }

    public depositar(valor: number, data: string = ""): void {

        if (data == "") {
            data = new Date().toString()
        }

        let dataDeposito = new Date(data)
        let saldoAniversario = new SaldoAniversario(dataDeposito.getTime(), valor)
        this._depositos.push(saldoAniversario)

        this.atualizarSaldo(this._depositos)

    }

    public sacar(valor: number): void {

        let dataSaque = new Date()

        if (this.verificarDatas(dataSaque, valor)) {

            this.atualizarSaldo(this._depositos)

        }

    }

    public resgatar(contaDestino: Conta, valor: number, data: string) {

        let dataResgate = new Date(data)

        // let mesMs = (24 * 60 * 60 * 1000 * 30)

        // let checarData = this._depositos.filter(deposito => dataResgate.getTime() >= deposito.dia + mesMs
        //     && valor <= deposito.saldo)

        // checarData.forEach(deposito => {
        //     deposito.saldo -= valor
        // })
        if (this.verificarDatas(dataResgate, valor)) {

            contaDestino.depositar(valor)

            this.atualizarSaldo(this._depositos)

        }

    }

    private verificarDatas(data: Date, valor: number): boolean {

        let mesMs = (24 * 60 * 60 * 1000 * 30)

        let checarData = this._depositos.filter(deposito => data.getTime() >= deposito.dia + mesMs
            && valor <= deposito.saldo)

        checarData.forEach(deposito => {
            deposito.saldo -= valor
        })

        return checarData.length > 0 ? true : false

    }

    private atualizarSaldo(depositos: Array<SaldoAniversario>): void {
        let total = 0;
        depositos.forEach((deposito) => {
            total += deposito.saldo
        })
        this.saldo = total
    }
}