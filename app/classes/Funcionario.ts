import { Cargo } from "./Cargo.js"
import { Pessoa } from "./Pessoa.js"

export class Funcionario extends Pessoa {

    private _salario: number;
    private _cargos: Array<Cargo> = [];

    public get cargo(): Array<Cargo> {
        return this._cargos;
    }

    public get salario(): number {
        return this._salario
    }

    public set salario(salario: number) {
        this._salario = salario
    }

    public addCargo(cargo: Cargo) {
        this._cargos.push(cargo)
    }

    public listar(): void {

        console.log(`NOME: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`Salário: ${this._salario}`)
        console.log("Cargo(s) exercido(s):")
        this._cargos.forEach((cargo) => console.log(cargo.nome))
    }

}