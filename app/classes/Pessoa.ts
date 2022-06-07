export abstract class Pessoa {
    private _telefone: string
    readonly _cpf: string
    readonly _nome: string

    constructor(nome: string, cpf: string) {
        this._cpf = cpf
        this._nome = nome
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