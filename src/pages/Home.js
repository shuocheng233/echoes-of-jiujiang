import React from 'react'
import Header from '@components/Header'
import Introduction from '@components/Introduction'
import History from '@components/History'
import Attractions from '@components/Attractions'
import Culture from '@components/Culture'
import Gallery from '@components/Gallery'
import Contact from '@components/Contact'
import Footer from '@components/Footer'


const Home = () => {
    return (
        <>
            <Header />
            <Introduction />
            <History />
            <Attractions />
            <Culture />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

export default Home