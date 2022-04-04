var mysql = require('mysql');

var con = mysql.createConnection({
  host: "151.139.124.25",
  user: "root",
  password: "vpn12345!",
  database : 'menagerie'
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
