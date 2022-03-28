import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import {login } from './api/user'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Login from './pages/Login';
import { UserType } from './types/user';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => { // 3
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: ProductType) => {
    console.log('app.js', product);
    const { data } = await add(product);
    setProducts([...products, data])
  }

  const onHandleAddUser = async (user: UserType) => {
    console.log('app.js', user);
    const { data } = await login(user);
    setProducts([...products, data])
  } 
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login onAdd={onHandleAddUser}/>} />
      </Route>
      <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product">
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
        </Route>
      </Route>
    </Routes>

  )
}
export default App