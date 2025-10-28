import { createWriteStream } from 'fs'
import path from 'path'

const filePath = path.resolve(import.meta.dirname, 'files/fileToWrite.txt')

const write = async () => {
	const writeStream = createWriteStream(filePath, 'utf8', { flags: 'a' })
	process.stdin.setEncoding('utf8')
	process.stdin.pipe(writeStream)
}

await write()
