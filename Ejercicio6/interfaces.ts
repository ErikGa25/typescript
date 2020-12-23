interface UserData {
    readonly username: string
    created_at: Date
    superuser?: boolean
    readonly personal: {
        name: string
        email: string
    }

    logout(): void
    rename: (username: string) => void
}

function login(): UserData {
    return {
        username: 'login',
        created_at: new Date(),
        //superuser: true,
        personal: {
            name: 'admin',
            email: 'foo@example.com'
        },
        logout() {
            console.log('Adios')
        },
        rename(username) {
            console.log('...')
        }
    }
}

let x = login