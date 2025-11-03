import { createCLIInterface } from './cli/interface.js'
import { parseCliArgs } from './cli/parser.js'
import { cd, ls, up } from './commands/commands.js'
import { add, cat, cp, mv, rm, rn } from './commands/files.js'

const { username } = parseCliArgs()

async function handleCommand(command) {
	const [cmd, ...args] = command.split(' ')

	switch (cmd) {
		case 'up':
			await up()
			break
		case 'cd':
			await cd(args[0])
			break
		case 'ls':
			await ls()
			break

		// File operations
		case 'cat':
			await cat(args[0])
			break
		case 'add':
			await add(args[0])
			break
		case 'rn':
			await rn(args[0], args[1])
			break
		case 'cp':
			await cp(args[0], args[1])
			break
		case 'mv':
			await mv(args[0], args[1])
			break
		case 'rm':
			await rm(args[0], args[1])
		default:
			console.log('Invalid input')
	}
}

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${process.cwd()}`)

const rl = createCLIInterface(username, handleCommand)
rl.prompt()
