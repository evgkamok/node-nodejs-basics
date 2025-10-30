import path from 'path'
import zlib from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

const filePathInput = path.resolve(
	import.meta.dirname,
	'files/fileToCompress.txt'
)
const filePathOutput = path.resolve(import.meta.dirname, 'files/archive.gz')

const compress = async () => {
	const readStream = createReadStream(filePathInput)
	const writeStream = createWriteStream(filePathOutput)

	readStream.pipe(zlib.createGzip()).pipe(writeStream)
}

await compress()
