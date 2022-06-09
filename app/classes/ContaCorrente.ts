import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class ContaCorrente extends Conta {

    private _limite: number

    public get limite(): number {
        return this._limite
    }

    public addCliente(cliente: Cliente): void {
        this.limiteVip(cliente)
    }

    public transferir(contaDestino: Conta, valor: number, data?: Date): void {

        if (contaDestino instanceof ContaPoupanca) {
            contaDestino.depositar(valor, data)
            this.saldo -= valor
        } else {

            if (!this.testeSaque(valor)) {
                console.log("Transferência não pode ser efetuada")
                return
            }

            this.saldo -= valor
            contaDestino.depositar(valor)

            if (this.saldo < 0) {
                this.saldoNegativo(this.saldo, valor)
            }

            console.log("Transferência efetuada")

        }

    }

    public sacar(valor: number): void {

        if (!this.testeSaque(valor)) {
            console.log("Saque não pode ser efetuado")
            return
        }

        this.saldo -= valor

        if (this.saldo < 0) {
            this.saldoNegativo(this.saldo, valor)
        }

        console.log("Saque efetuado")

    }

    public depositar(valor: number): void {

        let limiteAuxiliar = 0

        if (this.testeVip()) {

            limiteAuxiliar = 30000

            if (this._limite < limiteAuxiliar) {
                this.saldo += valor
                this._limite += valor
            }

        } else {

            limiteAuxiliar = 50

            if (this._limite < limiteAuxiliar) {
                this.saldo += valor
                this._limite += valor
            }

        }

        this.saldo += valor

    }

    public limiteVip(cliente: Cliente): void {
        cliente.vip ? this._limite = 30000 : this._limite = 50
    }

    private testeVip(): boolean {

        if (this.cliente.vip) {
            return true
        } else {
            return false
        }

    }

    private testeSaque(valor: number): boolean {

        if ((this.saldo < 0 && valor <= this._limite) || (valor <= this.saldo + this._limite)) {
            return true
        } else {
            return false
        }

    }

    private saldoNegativo(saldo: number, valorSaque: number): void {

        let limiteInicial = this._limite

        if (Math.abs(saldo) > this._limite) {
            this._limite = this._limite - valorSaque
            return
        }

        this._limite = this._limite - Math.abs(saldo)
        saldo = saldo + limiteInicial - (limiteInicial - Math.abs(saldo))

    }

}