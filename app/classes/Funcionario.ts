import { Cargo } from "./Cargo.js"
import { Pessoa } from "./Pessoa.js"

export class Funcionario extends Pessoa {

    private _salario: number;
    private _cargo: Array<Cargo> = [];

    public get cargo(): Array<Cargo> {
        return this._cargo;
    }

    public get salario(): number {
        return this._salario
    }

    public set salario(salario: number) {
        this._salario = salario
    }

    public addCargo(cargo: Cargo) {
        this._cargo.push(cargo)
    }

    public listarAtributos(): void {

        console.log(`NOME: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`Salário: ${this._salario}`)
        console.log("Cargo(s) exercido(s):")
        this._cargo.forEach((cargo) => console.log(cargo.nome))
    }

}