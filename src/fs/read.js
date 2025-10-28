import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.resolve(import.meta.dirname, 'files/fileToRead.txt')

const read = async () => {
	try {
		const fileContent = await fs.readFile(filePath, 'utf-8')
		console.log(fileContent)
	} catch (error) {
		console.log(error)
		throw new Error('FS operation failed')
	}
}

await read()
