import { open, write, close } from 'fs'
import { join } from 'path'
const os = requie('os')
import { green } from 'chalk'

const savePassword = (password) => {
    open(join(__dirname,'../','passwords.txt'),'a',666,(e,id) => {
        write(id, password + os.EOL,null,'utf-8',() => {
            close(id,() => {
                console.log(green("Password is saved in password.txt"))
            })
        })
    })
}

