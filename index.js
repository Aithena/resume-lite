const schedule = require('node-schedule')
const rule = new schedule.RecurrenceRule()
rule.second = 10

const j = schedule.scheduleJob (rule, function() {
  console.log("每分钟5s的时候提示一下")
})