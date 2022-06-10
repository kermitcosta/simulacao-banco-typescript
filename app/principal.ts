import { Cargo } from "./classes/Cargo.js"
import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"
import { ContaPoupanca } from "./classes/ContaPoupanca.js"
import { Endereco } from "./classes/Endereco.js"
import { Funcionario } from "./classes/Funcionario.js"

//Crie dois funcionários do banco, um gerente e um atendente.
const cargoGerente = new Cargo("Gerente")
const cargoAtendente = new Cargo("Atendente")

const funcionarioGerente = new Funcionario("885.357.931-51", "Alex Ribeiro Santos", "(85) 4784-6551")
funcionarioGerente.addCargo(cargoGerente)
funcionarioGerente.salario = 8000

const funcionarioAtendente = new Funcionario("323.094.753-35", "Gabrielle Costa Lima", "(11) 7696-6820")
funcionarioAtendente.addCargo(cargoAtendente)
funcionarioAtendente.salario = 3000


// Crie uma conta corrente e uma conta poupança para 2 clientes (um vip e um não vip)
// do banco, um deles com um endereço apenas e outro com dois endereços
// cadastrados.

//Cliente 1 (vip com dois endereços)
const clienteVip = new Cliente("740.871.871-01", "Lavinia Pinto Santos", "(75) 7105-4165", true)

const enderecoVip1 = new Endereco()
enderecoVip1.cep = "44033-120"
enderecoVip1.logradouro = "Rua Curitiba"
enderecoVip1.numero = "57"
enderecoVip1.complemento = "Ap. 902"
enderecoVip1.cidade = "Feira de Santana"
enderecoVip1.uf = "BA"

clienteVip.endereco = enderecoVip1

const enderecoVip2 = new Endereco()
enderecoVip2.cep = "13054-620"
enderecoVip2.logradouro = "Rua Igaci"
enderecoVip2.numero = "1472"
enderecoVip2.complemento = "ap 607"
enderecoVip2.cidade = "Campinas"
enderecoVip2.uf = "SP"

clienteVip.endereco = enderecoVip2

const contaCorrenteVip = new ContaCorrente("8934-1", clienteVip)

const contaPoupancaVip = new ContaPoupanca("9283-3", clienteVip)

//Cliente 2 (não é vip com um endereço)
const clienteComum = new Cliente("243.711.363-03", "Vitor Barbosa Cardoso", "(84) 2082-4051")

const enderecoComum = new Endereco
enderecoComum.cep = "59070-200"
enderecoComum.logradouro = "Avenida Paraíba"
enderecoComum.numero = "1269"
enderecoComum.complemento = "N/A"
enderecoComum.cidade = "Natal"
enderecoComum.uf = "RN"

clienteComum.endereco = enderecoComum

const contaCorrenteComum = new ContaCorrente("2176-1", clienteComum)

const contaPoupancaComum = new ContaPoupanca("6732-3", clienteComum)

//CLIENTE NÃO VIP

// Faça um depósito de um salário mínimo na conta corrente do cliente não vip
contaCorrenteComum.depositar(1212)
// console.log(contaCorrenteComum.saldo)

// Faça uma transferência de 5% de um salário mínimo da conta corrente do
// cliente não vip para a sua conta poupança no dia 04/06/2022.
contaCorrenteComum.transferir(contaPoupancaComum, 60.6, new Date(2022, 5, 4))
// console.log(contaCorrenteComum.saldo)
// console.log(contaPoupancaComum)

// Faça um saque de 50% de um salário mínimo da conta corrente do cliente
// não vip e exiba o saldo em conta após a ação.
contaCorrenteComum.sacar(606)
// console.log(contaCorrenteComum.saldo)

// Tente fazer outro saque de 50% de um salário mínimo da conta corrente do
// cliente não vip
contaCorrenteComum.sacar(606)

// Faça um depósito de 50 reais na conta poupança do cliente não vip no dia
// 09/06/2022
contaPoupancaComum.depositar(50, new Date(2022, 5, 9))


// Faça um resgate de 60 reais da conta poupança no dia 09/07/2022.
contaPoupancaComum.resgatar(contaCorrenteComum, 60, new Date(2022, 6, 9))


//CLIENTE VIP

// Faça um depósito de 50 salários mínimos na conta corrente do cliente vip.
contaCorrenteVip.depositar(60600)

//Faça uma transferência de 20 salários mínimos da conta corrente do cliente
// vip para a sua conta poupança no dia 05/06/2022.
contaCorrenteVip.transferir(contaPoupancaVip, 24240, new Date(2022, 5, 9))


// Faça um saque de 50000 reais da conta corrente do cliente vip e exiba o
// saldo em conta após a ação.
contaCorrenteVip.sacar(50000)
// console.log(contaCorrenteVip.saldo)

// Tente fazer outro saque de 50000 reais da conta corrente do cliente vip.
contaCorrenteVip.sacar(50000)


//Relatório dos Clientes do Banco

//Liste todos os clientes do banco, seus respectivos endereços e saldos em
// conta de todas suas contas

//Cliente Comum
console.log("-------------------------")
console.log("Cliente Comum:")
clienteComum.listarCliente()
console.log("-------------------------")

//Cliente Vip
console.log("Cliente VIP:")
clienteVip.listarCliente()
console.log("-------------------------")

// Liste todos os funcionários do banco, seus respectivos salários e cargos.
console.log("Gerente:")
funcionarioGerente.listarAtributos()
console.log("-------------------------")
console.log("Atendente:")
funcionarioAtendente.listarAtributos()
console.log("-------------------------")