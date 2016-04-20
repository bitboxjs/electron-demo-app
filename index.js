import 'reloader.js'
import bitbox from 'bitbox'
import app from 'electron-quick-start'

bitbox.app({
	name: 'bitbox /electron'
})

bitbox.signals({
	nameChanged: [
		function changeName({ state, input }) {
			state.set('name', input.value)
		}
	]
})

bitbox.run(app, document.body)

export default bitbox

window.bitbox = bitbox
