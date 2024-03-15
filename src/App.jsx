import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import AddUser from './pages/AddUser/AddUser'
import { UserProvider } from "./Context/UsersContext";
import DeleteUser from './pages/DeleteUser/DeleteUser'
import BorrowBook from './pages/BorrowBook/BorrowBook'
import { BooksProvider } from './Context/BooksContext'

function App() {

  return (
    <UserProvider>
      <BooksProvider>
      <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path="/add-user" element={<AddUser/>} />
          <Route path='/deleteuser' element={<DeleteUser/>} />
          <Route path='/borrowedbook/:id' element={<BorrowBook/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </BooksProvider>
    </UserProvider>
  )
}

export default App
