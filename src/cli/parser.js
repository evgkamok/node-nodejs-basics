import { parseArgs } from 'node:util'

export function parseCliArgs() {
	try {
		const args = process.argv.slice(2)

		const options = {
			username: {
				type: 'string',
			},
		}

		const { values } = parseArgs({ args, options })

		if (!values.username) {
			return 'user'
		} else {
			return {
				username: values.username,
			}
		}
	} catch (error) {
		console.error('Error', error.message)
		process.exit(1)
	}
}
