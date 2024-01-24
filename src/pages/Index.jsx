import Clouds from '@/components/Clouds'
import ContactUs from '@/components/ContactUs'
import FavTools from '@/components/FavTools'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Packages from '@/components/Packages'
import React from 'react'

const Index = () => {
    return (
        <div>
            <Header />
            <Clouds />
            <Packages />
            <FavTools />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Index
