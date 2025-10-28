import { Transform } from 'stream'

const transform = async () => {
	const upperCaseTransform = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk.toString().toUpperCase())
		},
	})

	process.stdin.pipe(upperCaseTransform).pipe(process.stdout)
}

await transform()

// class UpperCaseTransform extends Transform {
// 	_transform(chunk, encoding, callback) {
// 		callback(null, chunk.toString().toUpperCase())
// 	}
// }

// const transform = async () => {
// 	const transformUpperStream = new UpperCaseTransform()

// 	process.stdin.pipe(transformUpperStream).pipe(process.stdout)
// }

// await transform()
