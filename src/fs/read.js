import { promises as fs } from 'fs'
import path from 'path'

import { isExists } from './utils.js'

const read = async () => {
	const filePath = path.resolve('src', 'fs', 'files', 'fileToRead.txt')
	const isFileExists = await isExists(filePath)
	if (isFileExists) {
		const fileContent = await fs.readFile(filePath, 'utf-8')
		console.log(fileContent)
	} else {
		throw new Error('FS operation failed')
	}
}

await read()
