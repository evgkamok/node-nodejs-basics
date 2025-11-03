import { createCLIInterface } from './cli/interface.js'
import { parseCliArgs } from './cli/parser.js'
import { cd, goHomeDir, ls, up } from './commands/navigation.js'
import { add, cat, cp, mkdir, mv, rm, rn } from './commands/files.js'
import { hash } from './commands/hash.js'
import { osInfo } from './commands/os.js'
import { compress, decompress } from './commands/compress.js'

const { username } = parseCliArgs()

async function handleCommand(command) {
	const [cmd, ...args] = command.split(' ')

	switch (cmd) {
		// NAVIGATION
		case 'up':
			await up()
			break
		case 'cd':
			await cd(args[0])
			break
		case 'ls':
			await ls()
			break

		// FILE OPERATION
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
		case 'mkdir':
			await mkdir(args[0])
			break

		//OS
		case 'os':
			await osInfo(args[0])
			break

		// HASH
		case 'hash':
			await hash(args[0])
			break

		// COMPRESS / DECOMPRESS
		case 'compress':
			await compress(args[0], args[1])
			break
		case 'decompress':
			await decompress(args[0], args[1])
			break
		default:
			console.log('Invalid input')
	}
}

goHomeDir()
console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${process.cwd()}`)

const rl = createCLIInterface(username, handleCommand)
rl.prompt()
