import { readFile } from 'fs/promises'
import { createHash } from 'crypto'
import path from 'path'

const filePath = path.resolve(
	import.meta.dirname,
	'files/fileToCalculateHashFor.txt'
)

const calculateHash = async () => {
	const textFromFile = await readFile(filePath)
	const hash = createHash('sha256').update(textFromFile)
	console.log(hash.digest('hex'))
}

await calculateHash()
