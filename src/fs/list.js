import { readdir } from 'fs/promises'
import path from 'path'

const folderPath = path.resolve(import.meta.dirname, 'files')

const list = async () => {
	try {
		const listFiles = await readdir(folderPath)
		console.log(listFiles)
	} catch (error) {
		console.log(error)
		throw new Error('FS operation failed')
	}
}

await list()
