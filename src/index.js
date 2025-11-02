import { createCLIInterface } from './cli/interface.js'
import { parseCliArgs } from './cli/parser.js'
import { cd, ls, up } from './commands/commands.js'

const { username } = parseCliArgs()

async function handleCommand(command) {
	const [cmd, ...args] = command.split(' ')

	switch (cmd) {
		case 'up':
			up()
			break
		case 'cd':
			cd(args[0])
			break
		case 'ls':
			ls()
			break
		default:
			console.log('Invalid input')
	}
}

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${process.cwd()}`)

const rl = createCLIInterface(username, handleCommand)
rl.prompt()
