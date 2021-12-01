import React from 'react'
import Header from './Header';
import Middle from './Middle';
import MiddleLower from './MiddleLower';
import MyAppBar from '../../components/navbar/MyAppBar';
import Footer from '../../components/Footer/Footer';
import Pricing from './Pricing';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        display: "block",
        marginBottom: "4rem"
    }
}))
function Home() {
    const classes = useStyles()
    return (
        <>
            <MyAppBar
                button1='Home'
                button2='Pricing'
                button3='User guide'
                button4='Contact us'
                state={true}
            />
            <div className={classes.root}>
                <Header />
            </div>
            <div className={classes.root}>
                <Middle />
            </div>
            <div className={classes.root}>
                <MiddleLower />
            </div>
            <div className={classes.root}>
                <Pricing />
            </div>
            <Footer />

        </>
    )
}

export default Home
