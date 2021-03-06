import { Conta } from "./Conta.js";
import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    private _vip: boolean
    private _enderecos: Array<Endereco> = []
    private _contas: Array<Conta> = []

    constructor(cpf: string, nome: string, telefone: string, vip: boolean = false) {

        super(cpf, nome, telefone)
        this._vip = vip

    }

    public get contas() {
        return [...this._contas]
    }

    public get vip(): boolean {
        return this._vip
    }

    public set vip(valor: boolean) {
        this._vip = valor
    }

    public set endereco(endereco: Endereco) {
        this._enderecos.push(endereco)
    }

    public addConta(conta: Conta): void {
        this._contas.push(conta)
    }

    public listarEnderecos(): void {

        this._enderecos.forEach((endereco) => {

            console.log(`CEP: ${endereco.cep}`)
            console.log(`LOGRADOURO: ${endereco.logradouro}`)
            console.log(`NÚMERO: ${endereco.numero}`)
            console.log(`COMPLEMENTO: ${endereco.complemento}`)
            console.log(`CIDADE: ${endereco.cidade}`)
            console.log(`UF: ${endereco.uf}`)
            console.log("-------------------------")

        })
    }

    public listar(): void {

        let vip: string
        this._vip ? vip = "SIM" : vip = "NÃO"

        console.log("-------------------------")
        console.log(`NOME: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`VIP: ${vip}`)
        console.log("-------------------------")
        console.log("Endereço(s):")
        this.listarEnderecos()
        console.log("Saldo contas:")
        console.log("-------------------------")
        this._contas.forEach((conta) => {
            console.log(`Número: ${conta.numero}`)
            console.log(`Saldo: ${conta.saldo}`)
            console.log("-------------------------")
        })

    }

}