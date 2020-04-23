var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUser', function(req, res) {
    console.log(req.body);
    //{ firstname: 'Marry', lastname: 'Jane', address: 'Adelaide' }
    req.pool.getConnection(function(err, connection){
    	if(err) throw err;
    	var sql = "INSERT INTO customer (c_id, c_firstname, c_lastname) VALUES ('"+req.body.c_id+"', '"+req.body.c_firstname+"', '"+req.body.c_lastname+"');";
    	connection.query(sql, function(err, results){
    		console.log(results);
    		connection.release();
    		res.send({"CNumber":results.insertId});
    	});
    })
});

module.exports = router;
