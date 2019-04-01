var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'bdm289537170.my3w.com',
  user: 'bdm289537170',
  password: 'fanyf123.',
  database: 'bdm289537170_db',
  insecureAuth: true
})

connection.connect()

connection.query('SELECT * from wp_posts', function(error, results, fields) {
  if (error) throw error
  console.log('The solution is: ', results)
})
