const express = require("express");
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    user: 'Daniel',
    host: 'localhost',
    database: 'cyf_hotel',
    password: 'psql_password',
    port: 5432
});

app.get("/hotels", function(req, res) {
  pool.query('SELECT * FROM hotels', (error, result) => {
    res.json(result.rows);
  });
});

app.get("/bookings", (req, res)=>{
pool.query("SELECT * FROM customers INNER JOIN bookings ON customers.id=bookings.customer_id;", (error, result)=>{
    console.log(error);
    res.json(result.rows);
})
})

app.listen(3000, function() {
  console.log("server is listening on 3000");
});