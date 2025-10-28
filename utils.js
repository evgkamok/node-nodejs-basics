import { promises as fs } from 'fs'

export async function isFileExists(folderPath) {
	return await fs
		.access(folderPath)
		.then(() => true)
		.catch(() => false)
}
