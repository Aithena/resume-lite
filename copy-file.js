const fs = require('fs')
const fileName = 'README.md'

fs.copyFile(`./${fileName}`, `./docs/${fileName}`, (err)=>{
	if (err) {
		console.log(err)
	} else {
		console.log('copy file succeed')
	}
})