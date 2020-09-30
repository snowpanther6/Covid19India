import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Card/Cards';
import axios from 'axios'
{/*import { Switch, Link, Route } from 'react-router-dom';*/}

function App() {

  const initialData = {
    loading: true,
    datas: '',
    err: ''
  }
  const [data,setData] = useState(initialData)

  useEffect(()=>{
    axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
    .then(res=>{
        setData({
          loading:false,
          datas:res.data,
          err:''
        })
    })
    .catch(err=>{
      setData({
        loading:false,
        datas:'',
        err:err
      })
    })
  },[])

  return (
    <div className="App">
   {/*} <Link to="/">home</Link>
    <Link to="/card">card</Link>
    <Switch>
      <Route exact path="/" component={NavBar}></Route>
      <Route path="/card" component={()=><Cards data={data}/>}></Route>
      
      
    </Switch>   */}
    <NavBar/>
    <Cards data={data}/>
    
    </div>
  );
}

export default App;
