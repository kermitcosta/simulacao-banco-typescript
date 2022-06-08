export abstract class Pessoa {

    private _nome: string
    private _cpf: string
    private _telefone: string


    constructor(cpf: string, nome: string, telefone: string) {

        this._cpf = cpf
        this._nome = nome
        this._telefone = telefone

    }


    public get cpf(): string {
        return this._cpf
    }

    public get nome(): string {
        return this._nome
    }

    public get telefone(): string {
        return this._telefone
    }

    public set telefone(value: string) {
        this._telefone = value
    }

}