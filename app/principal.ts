import { Cargo } from "./classes/Cargo.js"
import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"
import { Endereco } from "./classes/Endereco.js"
import { Funcionario } from "./classes/Funcionario.js"

const end = new Endereco()
end.cep = "13054-620"
end.logradouro = "Rua Igaci"
end.numero = "1472"
end.complemento = "ap 607"
end.cidade = "Campinas"
end.uf = "SP"

const end2 = new Endereco()
end2.cep = "00000-000"
end2.logradouro = "0000"
end2.numero = "0000"
end2.cidade = "0000"
end2.uf = "00"

const clienteAlberto = new Cliente("Alberto", "19287312", "88992233", true)
clienteAlberto.telefone = "92187371923"
clienteAlberto.addEndereco(end)
clienteAlberto.addEndereco(end2)

const contaCorrente = new ContaCorrente()
contaCorrente.limiteVip(clienteAlberto)
clienteAlberto.addConta(contaCorrente)
contaCorrente.cliente = clienteAlberto

console.log(clienteAlberto.contas)

contaCorrente.sacar(3000)
console.log(clienteAlberto.contas)

contaCorrente.sacar(1000)
console.log(clienteAlberto.contas)

contaCorrente.depositar(1000)

console.log(clienteAlberto.contas)

// const contaNova = new ContaCorrente()
// contaCorrente.depositar(3000)
// console.log(clienteAlberto.contas)
// console.log(contaNova)
// contaCorrente.cliente = clienteAlberto
// contaNova.limiteVip(clienteAlberto)
// contaNova.depositar(30)
// console.log(contaNova)
// contaCorrente.transferir(contaNova, 1000)
// console.log(clienteAlberto.contas)
// console.log(contaNova.saldo)