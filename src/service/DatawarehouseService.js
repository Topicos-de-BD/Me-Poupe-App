const { Connection, Request } = require("tedious");

const config = {
  authentication: {
    options: {
      userName: "sqladmin", 
      password: "tebd@123" 
    },
    type: "default"
  },
  server: "http://sqltebd.database.windows.net/", 
  options: {
    database: "Sale", 
    encrypt: true
  }
};

const connection = new Connection(config);

function connectDatabase() {
    connection.on("connect", err => {
        if (err) {
          console.error(err.message);
        } else {
          queryDatabase();
        }
      });
      
      connection.connect();
}

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}

export default{
    getData: async () => connectDatabase()
}