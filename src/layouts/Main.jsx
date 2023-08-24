import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import TopHeader from '../shared/TopHeader/TopHeader'

const Main = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main