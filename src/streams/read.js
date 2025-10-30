import { createReadStream } from 'fs'
import path from 'path'

const filePath = path.resolve(import.meta.dirname, 'files/fileToRead.txt')

const read = async () => {
	const readStream = createReadStream(filePath, 'utf8')
	readStream.pipe(process.stdout)
}

await read()
