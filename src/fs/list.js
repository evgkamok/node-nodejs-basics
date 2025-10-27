import { promises as fs } from 'fs'
import path from 'path'

import { isExists } from './utils.js'

const list = async () => {
	const folderPath = path.resolve('src', 'fs', 'files')
	const isFolderPath = isExists(folderPath)

	if (isFolderPath) {
		const listFiles = await fs.readdir(folderPath)
		console.log(listFiles)
	} else {
		throw new Error('FS operation failed')
	}
}

await list()
