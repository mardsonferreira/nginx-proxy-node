const expresss = require("express");
const app = expresss();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

connection.query(`INSERT INTO people(name) values ('Mardson')`);
connection.query(`INSERT INTO people(name) values ('Mardison')`);
connection.query(`INSERT INTO people(name) values ('Madson')`);
connection.query(`INSERT INTO people(name) values ('Madeson')`);
connection.query(`INSERT INTO people(name) values ('Mardeson')`);
connection.query(`INSERT INTO people(name) values ('Marden')`);

const selectSQL = "SELECT name FROM people";

let html = "<h1>Full Cycle Rocks!</h1>" +
  "<br>" +
  "<ul>";

connection.query(selectSQL, function (err, results, fields) {
  if (err) throw err;
  results.forEach((item) => {
      html += "<li>" +  item.name + "</li>";
  });
  html += "</ul>"
});

connection.end();

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {});
