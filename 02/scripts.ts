type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string, 
    estado: string
}

// type CarrinhoComEndereco = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>, // aqui ele só vai aceitar caracteres minúsculos
//     cartao: Cartao,
//     endereco: Endereco
// }

// pode-se fazer dessa outra forma tbm: 

// Omito o tipoTransacao para setar ele novamente depois, com o operador "&", adiciono o tipo Carrinho, 
// e  endereco e tipoTransacao ao tipo CarrinhoComEndereco:

type CarrinhoComEndereco = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}
