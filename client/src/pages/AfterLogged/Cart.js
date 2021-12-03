import { Box, Button, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import Cookies from 'js-cookie';
import React from 'react'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import LoggedAppBar from './components/LoggedAppBar'
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        marginLeft: '1rem',
        marginRight: "1rem",
        marginTop: "2rem"
    },
    btn: {
        marginTop: "1.5rem",
        height: "3.5rem",
        width: "8rem",
        borderRadius: "0.5rem"
    },
    typo: {
        marginTop: "20rem",
        fontFamily: "Roboto condensed",
        fontSize: "2.5rem",
        fontWeight: "900",
        opacity: "0.8",
        color: "grey"
    },
    div: {
        marginTop: '10rem'
    },
    title: {
        float: 'right',
        fontFamily: "Abhaya",
        fontSize: "2rem",
        marginLeft: "4rem",
        color: "orange"
    }
}))
export default function Cart() {
    const classes = useStyles();
    const [order, setOrder] = React.useState([]);

    React.useEffect(() => {
        const data = Cookies.get('orders');
        if (data) {
            setOrder(JSON.parse(data));
        }
        else {
            setOrder(undefined);
        }
    }, [])
    return (
        <div>
            <LoggedAppBar />
            <div className={classes.div} align='left'>{order ?

                <div style={{ marginBottom: '5rem' }}>

                    {order.map(item =>
                        <Paper className={classes.root} elevation={3}>
                            {console.log(item)}
                            <Grid container >
                                <Typography className={classes.title}>Product </Typography>
                                <Typography className={classes.helper}>{item.seller}</Typography>
                            </Grid>
                            <Grid container >
                                <Typography className={classes.title}>Quantity </Typography>
                                <Typography className={classes.helper}>{item.quantity}</Typography>
                                <IconButton><Add /></IconButton>
                                <IconButton><Remove /></IconButton>
                            </Grid>
                            <Box align='center'>
                                <Grid align='center' container >
                                    <Typography className={classes.title}>Price </Typography>
                                    <Typography className={classes.helper}>{item.quantity * item.price}</Typography>
                                </Grid>
                            </Box>
                        </Paper>
                    )}

                    <Grid style={{ width: 300, }} container justifyContent="space-around">
                        <Button variant='contained' color='primary' className={classes.btn}>Checkout</Button>
                        <Button variant='contained' color='secondary' className={classes.btn}>Cancel</Button>
                    </Grid>

                </div>
                :
                <Typography align='center' className={classes.typo}>Orderd goods will apperar here</Typography>
            } </div>

        </div>
    )
}
