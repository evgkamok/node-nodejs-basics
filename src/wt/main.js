import path from 'path'
import { cpus } from 'os'
import { Worker } from 'worker_threads'

const workerPath = path.resolve(import.meta.dirname, 'worker.js')
const START_INDEX = 10

const performCalculations = async () => {
	const countCPU = cpus().length
	const workerPromises = []

	for (let i = 0; i < countCPU; i++) {
		const workerData = START_INDEX + i

		const workerPromise = new Promise(resolve => {
			const worker = new Worker(workerPath, { workerData })

			worker.on('message', data => {
				resolve({ status: 'resolved', data })
				worker.terminate()
			})

			worker.on('error', error => {
				resolve({ status: 'resolved', data: null })
			})
		})

		workerPromises.push(workerPromise)
	}

	const result = await Promise.all(workerPromises)
	console.log(result)
}

await performCalculations()
