import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    private _vip: boolean = false
    private _enderecos: Array<Endereco> = []


    public addEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco)
    }

    public listarEnderecos(): void {

        this._enderecos.forEach((endereco) => {

            console.log("-------------------------")
            console.log(`CEP: ${endereco.cep}`)
            console.log(`LOGRADOURO: ${endereco.logradouro}`)
            console.log(`NÚMERO: ${endereco.numero}`)
            console.log(`COMPLEMENTO: ${endereco.complemento}`)
            console.log(`CIDADE: ${endereco.cidade}`)
            console.log(`UF: ${endereco.uf}`)

        })

    }

    public listarCliente(): void {

        let vip: string
        this._vip ? vip = "SIM" : vip = "NÃO"

        console.log(`NOME: ${this._nome}`)
        console.log(`CPF: ${this._cpf}`)
        console.log(`TELEFONE: ${this._telefone}`)
        console.log(`VIP: ${vip}`)
        this.listarEnderecos()

    }

    public get vip(): boolean {
        return this._vip;
    }

    public set vip(value: boolean) {
        this._vip = value;
    }

}