import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'
import { createGunzip, createGzip } from 'node:zlib'

export async function compress(srcPath, dstPath) {
	if (!srcPath && !dstPath) {
		throw new Error('Both arguments is required')
	}

	const absSrcPath = path.resolve(srcPath)
	const absDstPath = path.resolve(dstPath)

	const source = createReadStream(absSrcPath)
	const destination = createWriteStream(absDstPath)
	const gzip = createGzip()

	await pipeline(source, gzip, destination)
	console.log(`Compressed successfully to ${absDstPath}`)
}

export async function decompress(srcPath, dstPath) {
	if (!srcPath || !dstPath) {
		throw new Error('Both arguments are required')
	}

	const absSrcPath = path.resolve(srcPath)
	const absDstPath = path.resolve(dstPath)

	const source = createReadStream(absSrcPath)
	const destination = createWriteStream(absDstPath)
	const gunZlib = createGunzip()

	await pipeline(source, gunZlib, destination)

	console.log(`Decompressed successfully to ${absDstPath}`)
}
