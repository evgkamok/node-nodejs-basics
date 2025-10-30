import path from 'path'
import zlib from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'

const archivePathInput = path.resolve(import.meta.dirname, 'files/archive.gz')
const archivePathOutput = path.resolve(
	import.meta.dirname,
	'files/fileToCompress.txt'
)

const decompress = async () => {
	// const readStream = createReadStream(archivePathInput)
	// const writeStream = createWriteStream(archivePathOutput)
	// readStream.pipe(zlib.createGunzip()).pipe(writeStream)

	pipeline(
		createReadStream(archivePathInput),
		zlib.createGunzip(),
		createWriteStream(archivePathOutput),
		err => {
			if (err) {
				console.error('Ошибка при распаковке:', err.message)
			} else {
				console.log('Извлечение завершено успешно')
			}
		}
	)
}

await decompress()
