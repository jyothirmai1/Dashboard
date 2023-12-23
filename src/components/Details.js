import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
function Details() {
  const arrData = useSelector((state) => state.data);
  const [data, setData] = useState(arrData[0].data);
  const [btnArr, setBtnArr] = useState([]);
  const [btnSalArr, setSalBtnArr] = useState([]);

  useEffect(() => {
    console.log("data", data);
    console.log("dataAge", btnArr);
    console.log("dataSal", btnSalArr);
  },[data,btnArr,btnSalArr]);
  const checkedFilter=(item)=>{
    setBtnArr([...btnArr,item])
  }
  const checkedSFilter=(item)=>{
    setSalBtnArr([...btnSalArr,item])
  }
  const handleFilterS=()=>{
    let filOneArr = data.filter(item=>item.employee_age<25)
    console.log('filter 1',filOneArr)
    if(btnArr.length>=1){
        setData([...data,...filOneArr]);
      }
      else{
        setData(filOneArr);
      }
    //setData(filOneArr);
    checkedFilter('b25');
  }
  const handleFilterM=()=>{
      let filTwoArr = arrData[0].data.filter(item=>item.employee_age<40 && item.employee_age>25)
      console.log('filter 2',filTwoArr)
      if(btnArr.length>=1){
        setData([...data,...filTwoArr]);
      }
      else{
        setData(filTwoArr);
      }
      checkedFilter('b2540');
    }
    const handleFilterL=()=>{
      let filThreeArr = arrData[0].data.filter(item=>item.employee_age>=40)
      console.log('filter 3',filThreeArr)
      if(btnArr.length>=1){
        setData([...data,...filThreeArr]);
      }
      else{
        setData(filThreeArr);
      }
      
      checkedFilter('b40');
    }
  

    const handleSalFilterS=()=>{
      let filOneArr = data.filter(item=>item.employee_salary<150000)
      console.log('filter 1',filOneArr)
      //setData(filOneArr)
      if(btnSalArr.length>=1){
        setData([...data,...filOneArr]);
      }
      else{
        setData(filOneArr);
      }
      checkedSFilter('b15');
    }
    const handleSalFilterM=()=>{
        let filTwoArr = arrData[0].data.filter(item=>item.employee_salary<300000 && item.employee_salary>150000)
        console.log('filter 2',filTwoArr)
        //setData(filTwoArr)
        if(btnSalArr.length>=1){
            setData([...data,...filTwoArr]);
          }
          else{
            setData(filTwoArr);
          }
        checkedSFilter('b3015');
      }
      const handleSalFilterL=()=>{
        let filThreeArr = arrData[0].data.filter(item=>item.employee_salary>300000)
        console.log('filter 3',filThreeArr)
        //setData(filThreeArr)
        if(btnSalArr.length>=1){
            setData([...data,...filThreeArr]);
          }
          else{
            setData(filThreeArr);
          }
        checkedSFilter('b30');
      }
    const handleClearFilter=()=>{
      setBtnArr([])
      setSalBtnArr([])
      setData(arrData[0].data)
    }
   
  return (
    <div>
      <div>Table Details</div>
      <div className="table__container">
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>
          Filter Age
          <span className="table-span_sm">
            <button name="b25"
            onClick={handleFilterS}
            >Below 25</button>
          </span>
          <span className="table-span_m">
            <button name="b2540"
            onClick={handleFilterM}
            >25-40</button>
          </span>
          <span className="table-span_m">
            <button  name="b40"
            onClick={handleFilterL}
            >Above 40</button>
          </span>
          <span className="table-span_m">
          Applied Age Filters:
          <span>
            {btnArr.length? 
            btnArr.map(item=>{
                return <span style={{marginRight:'5px'}}>{item}</span>
             }): "no filters applied"
        }</span>
          </span>
          <span className="table-span_m">
            <button 
            onClick={handleClearFilter}
            >Clear filter</button>
          </span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          Filter Salary
          <span className="table-span_sm">
            <button onClick={handleSalFilterS}>Below 1,50,000</button>
          </span>
          <span className="table-span_m">
            <button onClick={handleSalFilterM}>1,50,000 to 3,00,000</button>
          </span>
          <span className="table-span_m">
            <button onClick={handleSalFilterL}>3,00,000 and above</button>
          </span>
          <span className="table-span_m">
          Applied Salary Filters:
          <span>
            {btnSalArr.length? 
            btnSalArr.map(item=>{
                return <span style={{marginRight:'5px'}}>{item}</span>
             }): "no filters applied"
        }</span>
          </span>
          <span className="table-span_m">
            <button 
            onClick={handleClearFilter}
            >Clear filter</button>
          </span>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>

          {data.length &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_age}</td>
                  <td>{item.employee_salary}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Details;
