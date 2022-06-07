export abstract class Pessoa {

    protected _nome: string
    protected _cpf: string
    protected _telefone: string

    constructor(nome: string, cpf: string, telefone: string) {
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