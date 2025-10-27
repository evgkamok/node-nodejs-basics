const PREFIX = '--'

const parseArgs = () => {
	const formatArguments = process.argv.reduce((acc, value, index, array) => {
		if (value.startsWith(PREFIX)) {
			const argument = `${value.replace(PREFIX, '')} is ${array[index + 1]}`
			return [...acc, argument]
		}
		return acc
	}, [])

	const strFormatArguments = formatArguments.join(', ')
	console.log(strFormatArguments)
}

parseArgs()
