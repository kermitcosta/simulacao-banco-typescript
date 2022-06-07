import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    private _vip: boolean;
    private _enderecos: Array<Endereco> = []

    addEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco)
    }

    listarEnderecos(): void {
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

    listarCliente(): void {
        console.log(`Nome: ${this._nome}`)
        console.log(`Cpf: ${this._cpf}`)
        console.log(`Telefone: ${this._telefone}`)
        console.log(`É VIP?: ${this._vip}`)
        this.listarEnderecos()
    }

    public get vip(): boolean {
        return this._vip;
    }

    public set vip(value: boolean) {
        this._vip = value;
    }

}