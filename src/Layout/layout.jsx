import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Component/footer'
import ScrollToTop from '../Pages/ScrollToTop'

export const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
