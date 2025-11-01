import { parseCliArgs } from './cli/parser.js'

const { username } = parseCliArgs()

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${process.cwd()}`)
