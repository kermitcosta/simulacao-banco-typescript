import { Cargo } from "./Cargo.js";
import { Pessoa } from "./Pessoa.js"

export class Funcionario extends Pessoa {

    private _salario: number;
    private _cargo: Array<Cargo> = []

    public addCargo(cargo: Cargo) {
        this._cargo.push(cargo)
    }

    public listarCargos(): void {
        console.log("Cargo(s) exercido(s):")
        this._cargo.forEach((cargo) => console.log(cargo.nome))
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

}