import { Route, Routes } from "react-router-dom"

import { Home } from "./Layouts/Home"
import { About } from "./Layouts/About.jsx"
import { Products } from "./Layouts/Products.jsx"
import { Product } from "./Layouts/Product.jsx"
import { Login } from "./Layouts/Login.jsx"
import { Register } from "./Layouts/Register.jsx"
import { User } from "./Layouts/User"

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />      
      <Route path="/register" element={<Register />} />     
 
      <Route path="/user" element={<User />} />      
    </Routes>
  )
}