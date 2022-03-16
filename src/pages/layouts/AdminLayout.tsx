import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <aside>
            Menu Admin
        </aside>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout