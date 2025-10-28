const PREFIX = '--'

const parseArgs = () => {
	const formatArgumentsArr = process.argv
		.slice(2)
		.reduce((acc, value, index, array) => {
			if (value.startsWith(PREFIX)) {
				const argument = `${value.replace(PREFIX, '')} is ${array[index + 1]}`
				return [...acc, argument]
			}
			return acc
		}, [])

	const formatArgumentsStr = formatArgumentsArr.join(', ')
	console.log(formatArgumentsStr)
}

parseArgs()
