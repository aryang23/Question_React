import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const AgGrid = (props) => {
  const [apiNo, setApiNo] = useState(0);
  const [data, setData] = useState(null);
  setApiNo(props.action);

  const APIs = [
    "https://api.openweathermap.org/data/2.5/weather?lat=30.145292&lon=74.199303&appid=75f76f19baf2d6a09b5c6603cbfba95d&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?lat=50.145292&lon=74.199303&appid=75f76f19baf2d6a09b5c6603cbfba95d&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?lat=10.145292&lon=74.199303&appid=75f76f19baf2d6a09b5c6603cbfba95d&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?lat=45.145292&lon=74.199303&appid=75f76f19baf2d6a09b5c6603cbfba95d&units=metric",
  ];

  useEffect(() => {
    //Make an Array of API Calls and Accordingly Fetch the data and then show accordingly
    let currAPI = APIs[apiNo];
    getData(currAPI);
  }, []);

  async function getData(url) {
    const cData = await fetch(url);
    console.log(cData);

    const jsonData = await cData?.json();
    console.log(jsonData);

    //And Then we can display the data
    setData(jsonData);
  }
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>

      <div>
        <h1>Hey your current city is {`${data.main}`}</h1>
        <h2>Temp is {`${data.temp}`}</h2>
      </div>
    </>
  );
};

export default AgGrid;
