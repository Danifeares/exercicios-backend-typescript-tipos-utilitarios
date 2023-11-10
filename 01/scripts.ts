type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

// retira rg:
type UsuarioSemRG = Omit<Usuario, 'rg'>

// força todos os dados a serem obrigatórios:
type UsuarioSemRGeCamposObrigatorios = Required<UsuarioSemRG>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}