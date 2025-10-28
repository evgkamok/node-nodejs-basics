import { writeFile } from 'fs/promises'
import path from 'path'

const fileUrl = path.resolve(import.meta.dirname, 'files/fresh.txt')

const create = async () => {
	try {
		await writeFile(fileUrl, 'I am fresh and young', { flag: 'wx' })
	} catch (err) {
		console.log(err)
		throw new Error('FS operation failed')
	}
}

await create()
