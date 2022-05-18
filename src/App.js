 import React from 'react'
//import Login from './component/login_component';
// import SignUp from './component/signup_component';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Header from './component/Header'
import './index.css'


function App() {
  return (
    <>
    <Router>
     <div className='container'>
       <Header/>
       <Routes>
         <Route path='/' element ={<Dashboard/>} ></Route>
         <Route path='/Signin' element = {<SignIn/>} ></Route>
         <Route path='/SignUp' element = {<SignUp/>}></Route>
       </Routes>
     </div>
     </Router>
     </>
    
  )
}
export default App