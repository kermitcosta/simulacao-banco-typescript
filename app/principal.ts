import { Cliente } from "./classes/Cliente.js"
import { Endereco } from "./classes/Endereco.js"

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

console.log(cliente.listarCliente())