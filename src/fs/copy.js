import { cp } from 'fs/promises'
import path from 'path'
import { isFileExists } from '../../utils.js'

const srcFolderPath = path.resolve(import.meta.dirname, 'files')
const destFolderPath = path.resolve(import.meta.dirname, 'files_copy')
const isSrcFolderPathExists = await isFileExists(srcFolderPath)

const copy = async () => {
	if (!isSrcFolderPathExists) {
		throw new Error('FS operation failed')
	} else {
		await cp(srcFolderPath, destFolderPath, {
			recursive: true,
			errorOnExist: true,
			force: false,
		}).catch(error => {
			console.log(error)
			throw new Error('FS operation failed')
		})
	}
}

await copy()
