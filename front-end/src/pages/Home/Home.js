
import React from 'react'
import Header from './Header';
import Middle from './Middle';
import MiddleLower from './MiddleLower';

import MyAppBar from '../../components/navbar/MyAppBar';
import Footer from '../../components/Footer/Footer';
import Pricing from './Pricing';

function Home() {

    return (
        <>
            <MyAppBar
                button1='Home'
                button2='Pricing'
                button3='User guide'
                button4='Contact us'
                state = {true}
            />
            <Header />
            <>
                <Middle />
            </>
            < >
                <MiddleLower />
            </>
            <>
                <Pricing/>
            </>
            <Footer />

        </>
    )
}

export default Home
