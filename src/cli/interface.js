import { createInterface } from 'node:readline/promises'

export function createCLIInterface(username, commandHandler) {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: '> ',
	})

	rl.on('line', async input => {
		const command = input.trim()

		if (command === '.exit') {
			rl.close()
			return
		}

		if (command) {
			try {
				await commandHandler(command)
			} catch (error) {
				console.log('Operation failed')
			}
		}

		console.log(`You are currently in ${process.cwd()}`)

		rl.prompt()
	})

	rl.on('close', () => {
		console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
		process.exit(0)
	})

	rl.on('SIGINT', () => {
		rl.close()
	})

	return rl
}
