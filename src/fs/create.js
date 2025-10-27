import { promises as fs } from 'fs'
import path from 'path'
import { isExists } from './utils.js'

const create = async () => {
	const folderPath = path.join(process.cwd(), 'src', 'fs', 'files')
	const filePath = path.join(folderPath, 'fresh.txt')

	const fileExists = isExists(filePath)

	if (fileExists) {
		throw new Error('FS operation failed')
	} else {
		await fs.writeFile(filePath, 'I am fresh and young')
	}
}

await create()
