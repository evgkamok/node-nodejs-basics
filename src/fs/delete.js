import { promises as fs } from 'fs'
import path from 'path'

import { isExists } from './utils.js'

const remove = async () => {
	const filePath = path.resolve('src', 'fs', 'files', 'fileToRemove.txt')
	const isFileExists = await isExists(filePath)

	if (isFileExists) {
		await fs.rm(filePath).catch(() => {
			throw new Error('FS operation failed')
		})
	} else {
		throw new Error('FS operation failed')
	}
}

await remove()
