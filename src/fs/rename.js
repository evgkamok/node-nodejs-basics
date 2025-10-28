import { rename } from 'fs/promises'
import path from 'path'

import { isFileExists } from '../../utils.js'

const oldFileName = path.resolve(import.meta.dirname, 'wrongFilename.txt')
const newFileName = path.resolve(import.meta.dirname, 'properFilename.md')
const isNewFileNameExists = await isFileExists(newFileName)

const rename = async () => {
	if (isNewFileNameExists) {
		throw new Error('FS operation failed')
	} else {
		await rename(oldFileName, newFileName)
	}
}

await rename()
