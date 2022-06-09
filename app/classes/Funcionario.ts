import { Cargo } from "./Cargo.js"
import { Pessoa } from "./Pessoa.js"

export class Funcionario extends Pessoa {

    private _salario: number;
    private _cargo: Array<string> = [];

    public get cargo(): Array<string> {
        return this._cargo;
    }

    public get salario(): number {
        return this._salario
    }

    public set salario(salario: number) {
        this._salario = salario
    }

    public addCargo(cargo: Cargo) {
        this._cargo.push(cargo.nome)
    }

    // public listarCargos(): void {
    //     console.log("Cargo(s) exercido(s):")
    //     this._cargo.forEach((cargo) => console.log(cargo.nome))
    // }

}