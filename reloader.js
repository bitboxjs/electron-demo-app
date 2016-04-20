import reloader from 'systemjs-hot-reloader'

new reloader('http://localhost:3001')
	.on('change', (file) => document.title = file)
