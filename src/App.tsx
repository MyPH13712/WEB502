import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  useEffect(() => { // 3
    const getProducts = async () => {
       const { data } = await list();
       setProducts(data);
    }
    getProducts();
 },[])
 const removeItem = async (id: number) => {
   // xoa tren API
   const { data } = await remove(id);
   // reRender
   data && setProducts(products.filter(item => item._id !== data._id));
 }
  return (
    <Routes>
      {/* <Route path="/" element= {<h1>Home </h1>} />
          <Route path="product" element= {<h1>Product</h1>} />
          <Route path="about" element = {<h1>About </h1>}/> */}
      <Route path="/" element={<WebsiteLayout />} >
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<ManagerProduct />} />
      </Route>
    </Routes>

  )
}
export default App