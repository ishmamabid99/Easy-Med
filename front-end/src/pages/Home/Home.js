
import React, { useEffect } from 'react'
import Header from './Header';
import Middle from './Middle';
import MiddleLower from './MiddleLower';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {
    useEffect(() => {
        Aos.init(
            {
                duration: 2000
            }
        )
    }, [])
    return (
        <>
            <Header />
            <div data-aos='fade-up' >
                <Middle />
            </div>
            <div data-aos='fade-up' >
                <MiddleLower />
            </div>

        </>
    )
}

export default Home
