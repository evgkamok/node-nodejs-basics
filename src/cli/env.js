const PREFIX = 'RSS_'

const parseEnv = () => {
	const envVariables = Object.entries(process.env).reduce(
		(acc, value, index, array) => {
			const [nameVar, valueVar] = value

			if (nameVar.startsWith(PREFIX)) {
				const variable = `${nameVar}=${valueVar}`
				return [...acc, variable]
			}
			return acc
		},
		[]
	)

	const strFormatVariables = envVariables.join(', ')
	console.log(strFormatVariables)
}

parseEnv()
