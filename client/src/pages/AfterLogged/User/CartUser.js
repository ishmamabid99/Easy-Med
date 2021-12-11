import { Avatar, Box, Button, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import Cookies from 'js-cookie';
import React from 'react'
import LoggedAppBar from '../components/LoggedAppBar'
import axios from '.././../../methods/axios'
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        marginLeft: '1rem',
        marginRight: "1rem",
        marginTop: "2rem"
    },
    rootPaper: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        minHeight: 50,
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
        marginTop: '10rem',
        marginBottom: "10rem"
    },
    title: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "#2C394B"
    },
    helper: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "grey",

    },
    img: {
        margin: "1rem",
        borderRadius: '0',
        height: "10rem",
        width: "40%"
    },
    btnControlAdd: {
        color: "green",
        fontFamily: "Roboto",
        fontWeight: "700",
        margin: "1rem"
    },
    btnControlRemove: {
        color: "red",
        fontFamily: "Roboto",
        fontWeight: "700",
        margin: "1rem"
    },
    total: {
        padding: "0.5rem",
        fontFamily: "Abhaya",
        fontSize: "1.5rem"
    }
}))
export default function CartUser() {
    const classes = useStyles();
    const [order, setOrder] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [updateprice, setUpdate] = React.useState(0)

    React.useEffect(() => {
        const data = Cookies.get('orders_user');
        if (data) {
            setOrder(JSON.parse(data));
            const dt = JSON.parse(data);
            let sum = 0;
            dt.forEach(element => {
                sum += (element.quantity * element.price)
            });
            setTotal(sum)
        }
        else {
            setOrder(undefined);
        }
    }, [])
    function setData(item, str) {
        let data = order;
        data.find((o, i) => {
            if (o === item) {
                if (str === 'add') {
                    let tmp = parseInt(o.quantity);
                    tmp++;
                    o.quantity = tmp;
                }
                else {
                    let tmp = parseInt(o.quantity);
                    tmp--;
                    o.quantity = tmp;
                }
            }
        });
    }
    return (
        <div>
            <LoggedAppBar />
            <div className={classes.div} align='center'>{order ?

                <div>

                    {order.map(item =>
                        <Paper className={classes.root} elevation={3}>
                            <Grid justifyContent='flex-start' container>
                                <Avatar className={classes.img} src={`/uploads/${item.img}`}></Avatar>
                                <div style={{ margin: "1rem" }} align='center'>
                                    <Grid container >
                                        <Typography className={classes.title}>Product:</Typography>
                                        <Typography className={classes.helper}>{item.seller}</Typography>
                                    </Grid>
                                    <Grid container >
                                        <Typography className={classes.title}>Quantity:</Typography>
                                        <Typography className={classes.helper}>{parseInt(item.quantity) + parseInt(updateprice)}</Typography>
                                    </Grid>
                                    <Box align='center'>
                                        <Grid align='center' container >
                                            <Typography className={classes.title}>Price:</Typography>
                                            <Typography className={classes.helper}>{(parseInt(item.quantity) + parseInt(updateprice)) * parseInt(item.price)}</Typography>
                                        </Grid>
                                    </Box>
                                    <div >
                                        <Button onClick={() => {
                                            setData(item, 'add')
                                            setTotal(parseInt(total) + parseInt(item.price))
                                        }} className={classes.btnControlAdd}>Add</Button>
                                        <Button onClick={() => {
                                            setData(item, 'sub');
                                            setTotal(parseInt(total) - parseInt(item.price))
                                        }} className={classes.btnControlRemove}>Remove</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Paper>
                    )}
                    <Paper className={classes.rootPaper}>
                        <div align='center'>

                            <Typography className={classes.total}>Total: {total}</Typography>

                        </div>
                    </Paper>
                    <Grid style={{ width: 300, }} container justifyContent="space-around">
                        <Button onClick={() => {
                            const token = Cookies.get('access');
                            Cookies.remove('orders_user',);
                            const res = axios.post('/orderfromuser', { data: order }, {
                                headers: {
                                    Authorization: "Bearer " + token
                                }
                            }).then(res => {
                                if (res.status === 200) {
                                    window.location.href = '/app'
                                }
                            })
                        }} variant='contained' color='primary' className={classes.btn}>Checkout</Button>
                        <Button onClick={() => {
                            Cookies.remove('orders_user');
                            window.location.href = '/app'
                        }} variant='contained' color='secondary' className={classes.btn}>Cancel</Button>
                    </Grid>

                </div>
                :
                <Typography align='center' className={classes.typo}>Orderd goods will apperar here</Typography>
            } </div>

        </div>
    )
}
