import { rm } from 'fs/promises'
import path from 'path'

const filePath = path.resolve(import.meta.dirname, 'files/fileToRemove.txt')

const remove = async () => {
	try {
		await rm(filePath)
	} catch (error) {
		console.log(error)
		throw new Error('FS operation failed')
	}
}

await remove()
