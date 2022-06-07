import { Cargo } from "./classes/Cargo.js"
import { Cliente } from "./classes/Cliente.js"
import { Endereco } from "./classes/Endereco.js"
import { Funcionario } from "./classes/Funcionario.js"

let end = new Endereco()
end.cep = "13054-620"
end.logradouro = "Rua Igaci"
end.numero = "1472"
end.complemento = "ap 607"
end.cidade = "Campinas"
end.uf = "SP"

let end2 = new Endereco()
end2.cep = "00000-000"
end2.logradouro = "0000"
end2.numero = "0000"
end2.cidade = "0000"
end2.uf = "00"

let cliente = new Cliente("Alberto", "19287312", "88992233")
cliente.telefone = "92187371923"
cliente.vip = true
cliente.addEndereco(end)
cliente.addEndereco(end2)

let gerente = new Cargo("Gerente")
let funcionario = new Funcionario("Mariano", "98367422902", "88998548222")
funcionario.addCargo(gerente)
funcionario.salario = 3000
funcionario.salario
let auxiliar = new Cargo("Auxiliar")
funcionario.addCargo(auxiliar)

console.log(funcionario.listarCargos())