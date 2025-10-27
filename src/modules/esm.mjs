import path from 'path'
import { release, version } from 'node:os'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'

import './files/c.cjs'

const random = Math.random()

const unknownObject = await (random > 0.5
	? import('./files/a.json', { with: { type: 'json' } })
	: import('./files/b.json', { with: { type: 'json' } }))

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)
console.log(`Path to current file is ${fileName}`)
console.log(`Path to current directory is ${dirName}`)

const myServer = createServer((_, res) => {
	res.end('Request accepted')
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
	console.log('To terminate it, use Ctrl+C combination')
})

export { unknownObject, myServer }
