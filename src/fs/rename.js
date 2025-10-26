import { promises as fs } from 'fs'
import path from 'path'

import { isExists } from './utils.js'

const rename = async () => {
	const oldFileName = path.resolve('src', 'fs', 'files', 'wrongFilename.txt')
	const newFileName = path.resolve('src', 'fs', 'files', 'properFilename.md')

	const isOldFileNameExists = await isExists(oldFileName)
	const isNewFileNameExists = await isExists(newFileName)

	if (!isOldFileNameExists || isNewFileNameExists) {
		throw new Error('FS operation failed')
	} else {
		await fs.rename(oldFileName, newFileName).catch(() => {
			throw new Error('FS operation failed')
		})
	}
}

await rename()
