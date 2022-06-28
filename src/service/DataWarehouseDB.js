const { Connection, Request } = require("tedious");

const config = {
    server: "sqltebd.database.windows.net", 
    authentication: {
      options: {
        userName: "sqladmin", 
        password: "tebd@123", 
      },
      type: "default"
    },
    options: {
      database: "WebHostingSampleDW", 
    }
  };

const CONNECTION = new Connection(config);

export default CONNECTION;