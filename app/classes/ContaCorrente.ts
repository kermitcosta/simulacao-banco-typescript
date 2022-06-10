import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class ContaCorrente extends Conta {

    private _limite: number

    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente)
        this.limiteVip(cliente)
    }

    public get limite(): number {
        return this._limite
    }

    public addCliente(cliente: Cliente): void {
        this.limiteVip(cliente)
    }

    public transferir(contaDestino: Conta, valor: number, data?: Date): void {

        if (valor <= this.saldo + this._limite) {

            if (contaDestino instanceof ContaPoupanca) {

                contaDestino.depositar(valor, data)
                this.saldo -= valor

                console.log(`Transferência de ${valor} efetuada para a conta ${contaDestino.numero}`)

            } else {

                this.saldo -= valor
                contaDestino.depositar(valor)

                console.log(`Transferência de ${valor} efetuada para a conta ${contaDestino.numero}`)

            }

        } else {

            console.log("Transferência não pode ser efetuada")
        }

    }

    public sacar(valor: number): void {

        if (valor <= this.saldo + this._limite) {

            this.saldo -= valor
            console.log(`Saque de ${valor} efetuado`)

        } else {
            console.log("Saque não pode ser efetuado")
        }

    }

    public depositar(valor: number): void {

        this.saldo += valor
        console.log(`Depósito de ${valor} efetuado`)

    }

    public limiteVip(cliente: Cliente): void {
        cliente.vip ? this._limite = 30000 : this._limite = 50
    }

}