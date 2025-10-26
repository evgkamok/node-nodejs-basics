import { promises as fs } from 'fs'
import path from 'path'

const create = async () => {
	const folderPath = path.join(process.cwd(), 'src', 'fs', 'files')
	const filePath = path.join(folderPath, 'fresh.txt')

	const fileExists = await fs
		.access(filePath)
		.then(() => true)
		.catch(() => false)

	if (fileExists) {
		throw new Error('FS operation failed')
	} else {
		await fs.writeFile(filePath, 'I am fresh and young')
	}
}

await create()
