type Numero = number

let n: Numero = 10

type LoginCredentials = {
    username: string,
    password: string
    remember?: boolean
}

function login(data: LoginCredentials) {}

login({
    username: 'Armando',
    password: 'asdfg'
})