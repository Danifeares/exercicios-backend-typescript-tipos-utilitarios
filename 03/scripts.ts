type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

// criado um tipo para o retorno da função conexão, para então poder manipular esse retorno usando ReadOnly!
type Conexao = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<Conexao> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const conecta = conexao({
    username: 'dani',
    password: '123',
    host: 'localhost',
    port: '5432',
    dbname: 'pg'
})
