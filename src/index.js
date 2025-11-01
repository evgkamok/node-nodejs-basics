import { createCLIInterface } from './cli/interface.js'
import { parseCliArgs } from './cli/parser.js'

const { username } = parseCliArgs()

async function handleCommand(command) {
	const [cmd, ...args] = command.split(' ')

	switch (cmd) {
		case 'up':
			console.log('Command up')
			break
		case 'cd':
			console.log(`Command cd ${args[0]}`)
			break
		case 'ls':
			console.log('Command ls')
			break
		default:
			console.log('Invalid input')
	}
}

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${process.cwd()}`)

const rl = createCLIInterface(username, handleCommand)
rl.prompt()
