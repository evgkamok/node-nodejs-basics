import { promises as fs } from 'fs'
import { createHash } from 'crypto'
import path from 'path'

const calculateHash = async () => {
	const filePath = path.resolve(
		'src',
		'hash',
		'files',
		'fileToCalculateHashFor.txt'
	)

	const textFromFile = await fs.readFile(filePath)
	const hash = createHash('sha256').update(textFromFile)
	console.log(hash.digest('hex'))
}

await calculateHash()
