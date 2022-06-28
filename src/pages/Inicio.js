import React, { useState, useEffect } from 'react';
import '../stylesheet/pages/Inicio.css';
import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';;
import CONNECTION from '../service/DataWarehouseDB';

const Inicio = (props) => {
    
    const getDataTable = async() => {
        try {
            console.log("entrou aqui")

            CONNECTION.on("connect", err => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("-------> connection succeed")
                }
            });

            CONNECTION.connect();

        } catch {

            console.log("erro na chamada de api");
        }
    }

    useEffect(()=>getDataTable(),[])
  
    return (   
        <div className="App">
            <header className="App-header">
            <img src={logo}  alt="logo" />
            <h1>
                Me Poupe!
            </h1>
            <h4>
                Bem-vindo ao Me Poupe!
            </h4>
            <p className="textinho">Aqui voce aprende a controlar suas financas e a conquistar sua independência financeira</p>

            <Link to="/cadastro"> <div className="iniciar"><span className="spanNone">&nbsp;&nbsp; INICIAR</span><span className="spanHover">&nbsp;&nbsp; INICIAR</span><FontAwesomeIcon icon={faArrowRight} className="doneteIcon"/></div></Link>

            </header>
        </div>
  
    );
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
  
    CONNECTION.execSql(request);
  }
  
  export default Inicio;
  