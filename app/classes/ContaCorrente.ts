import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    private _limite: number


    public get limite(): number {
        return this._limite
    }

    public limiteVip(cliente: Cliente): void {
        cliente.vip ? this._limite = 3000 : this._limite = 50
    }

    public transferir(contaDestino: Conta, valor: number): void {

        if (!this.testeSaque(valor)) {

            console.log("Transferência não pode ser efetuada")
            return

        }

        contaDestino.depositar(valor)
        this.saldoNegativo(this.saldo, valor)
        console.log("Transferência efetuada")

    }

    public sacar(valor: number): void {

        if (!this.testeSaque(valor)) {

            console.log("Saque não pode ser efetuado")
            return

        }

        this.saldo -= valor
        this.saldoNegativo(this.saldo, valor)
        console.log("Saque efetuado")

    }

    public depositar(valor: number): void {

        let limiteAuxiliar = 0

        if (this.testeVip()) {

            limiteAuxiliar = 3000

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

    }

    private testeVip(): boolean {

        if (this.cliente.vip) {
            return true
        }

        return false

    }

    private testeSaque(valor: number): boolean {

        if ((this.saldo < 0 && valor <= this._limite) || (valor <= this.saldo + this._limite)) {
            return true
        } else { return false }

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