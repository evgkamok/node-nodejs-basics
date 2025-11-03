import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import path from 'node:path'

export async function hash(filePath) {
	if (!filePath) {
		throw new Error('File path is required')
	}

	try {
		const absFilePath = path.resolve(filePath)
		const rdStream = createReadStream(absFilePath)

		const hash = createHash('sha256')

		for await (const chunk of rdStream) {
			hash.update(chunk)
		}

		const hex = hash.digest('hex')
		console.log(`SHA-256 hash: ${hex}`)
		return hex
	} catch (error) {
		console.log('error-new', error)
		throw new Error('Failed to calculate hash')
	}
}
