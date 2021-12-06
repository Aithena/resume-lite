const schedule = require('node-schedule')
const rule = new schedule.RecurrenceRule()
rule.second = 10
const copy = require('./copy-file')

const j = schedule.scheduleJob (rule, function() {
  copy()
  console.log("每分钟5s的时候提示一下")
})