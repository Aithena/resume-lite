const fs = require('fs')
const path = require('path')

fs.copyFile('./README.md','./docs/README.md',(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log('copy file succeed')
	}
})