const mysql = require('mysql');

var connection = mysql.createConnection({
	host: "us-cdbr-east-05.cleardb.net",
    user: "b5ddb7397a1f81",
    password: "e2d3a75a",
    database : "heroku_4e3a5546a5cda06"
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
