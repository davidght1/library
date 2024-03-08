import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import AddUser from './pages/AddUser/AddUser'
import { UserProvider } from "./Context/UsersContext";
import DeleteUser from './pages/DeleteUser/DeleteUser'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path="/add-user" element={<AddUser/>} />
          <Route path='/deleteuser' element={<DeleteUser/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
