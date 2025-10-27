import { promises as fs } from 'fs'
import path from 'path'
import { isExists } from './utils.js'

const copy = async () => {
	const srcFolderPath = path.join(process.cwd(), 'src', 'fs', 'files')
	const destFolderPath = path.join(process.cwd(), 'src', 'fs', 'files_copy')

	const isSrcFolderPathExists = isExists(srcFolderPath)

	if (!isSrcFolderPathExists) {
		throw new Error('FS operation failed')
	} else {
		await fs
			.cp(srcFolderPath, destFolderPath, {
				recursive: true,
				errorOnExist: true,
				force: false,
			})
			.catch(() => {
				throw new Error('FS operation failed')
			})
	}
}

await copy()
