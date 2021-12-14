import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Modal, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { getMarketData } from '../../../methods/postData'
import { SwlSubmitCart, SwlSubmitCartError } from '../../../methods/Swal';
const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 200,
        flexGrow: 1,
        height: "100vh",
        marginRight: 10
    },
    card: {
        minHeight: 300,
        maxWidth: 280,
    },
    cardTypo: {
        fontFamily: "Abhaya",
        fontWeight: "700"
    },
    bottomTypo: {
        fontSize: '1.5rem',
        fontFamily: "Roboto cursive",
        fontWeight: "500"
    },
    btn: {
        width: 300
    },
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#FFF",
        height: "18rem",
        width: "30rem",
        minWidth: '240px',
        minHeight: "180px",
        transform: 'translate(-50%, -50%)',
        outline: "none",
        borderRadius: "1rem"
    },
    modalBoxMobile: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#FFF",
        height: "14rem",
        width: "22rem",
        minWidth: '240px',
        minHeight: "180px",
        transform: 'translate(-50%, -50%)',
        outline: "none",
        borderRadius: "1rem"
    },
    inp: {
        width: '18rem',
        marginTop: "4rem"
    },
    form: {
        width: "20rem"
    },
    btn: {
        marginTop: "1rem",
        width: '18rem'
    }
}))
export default function UserMarket(props) {
    const [sendData, setSendData] = useState(undefined)
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const [data, setData] = useState(undefined)
    const [isModal, setModal] = useState(false);
    const [quantity, setQuantity] = useState(undefined)
    useEffect(() => {
        async function getData() {
            const res = await getMarketData(props.state);
            if (res) setData(res);
        }
        getData();
    }, [])
    function handleClick(item) {
        setSendData({ ...sendData, item: item });
        setModal(true);
    }
    function handlePost() {
        const order = {
            name: sendData.item.seller,
            productId: sendData.item.productId,
            quantity: quantity,
            buyer: props.state.name,
            seller: sendData.item.buyer,
            price: sendData.item.price,
            img: sendData.item.img
        }
        console.log(order)
        if (order.quantity && order.quantity > 0) {
            let orders = Cookies.get('orders_user');
            console.log(orders)
            if (!orders) {
                orders = [];
                orders.push(order);
                console.log(orders);
                Cookies.set('orders_user', JSON.stringify(orders));
            }
            else {
                let dt = JSON.parse(orders);
                dt.push(order);
                Cookies.set('orders_user', JSON.stringify(dt));
            }
            setModal(false)
            SwlSubmitCart();
        }
        else {
            setModal(false)
            SwlSubmitCartError();
        }
    }
    return (
        <div>{isModal ?
            <>{!isMatch ?
                <Modal
                    open={isModal}
                    onClose={() => {
                        setModal(false)
                    }}
                >
                    <Box align='center' className={classes.modalBox}>
                        <form className={classes.form} noValidate autoComplete='off'>
                            <TextField
                                onChange={(e) => setQuantity(e.target.value)}
                                variant='outlined'
                                label='Quantity'
                                className={classes.inp}
                                helperText="The ammount of medicine you want to buy"
                            />
                            <Button onClick={handlePost} variant='contained' color="primary" className={classes.btn} variant='contained'>Confirm</Button>
                            <Button onClick={() => { setModal(false) }} className={classes.btn} color='secondary' variant='contained'>Cancel</Button>
                        </form>
                    </Box>
                </Modal>
                :
                <Modal
                    open={isModal}
                    onClose={() => {
                        setModal(false)
                    }}
                >
                    <Box className={classes.modalBoxMobile}>

                    </Box>
                </Modal>

            } </>
            : null
        }
            {data ?

                <>
                    {!isMatch ?
                        <div className={classes.root}>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                {data.map(item =>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="200"
                                                    image={`/uploads/${item.img}`}
                                                    title="Contemplative Reptile" />
                                                <CardContent>
                                                    <Typography className={classes.cardTypo} align='center' gutterBottom variant="h5" component="h2">
                                                        {item.seller}
                                                    </Typography>
                                                    <Typography align='center' variant="overline" color="textSecondary" component="p">
                                                        Quantity:  {item.quantity}
                                                    </Typography>

                                                </CardContent>
                                            </CardActionArea>

                                            <Typography className={classes.bottomTypo} align='center'>{item.price} BDT</Typography>
                                            <CardActions>
                                                <Button id={item._id} onClick={(e) => {
                                                    handleClick(item)
                                                }} color='secondary' variant='contained' className={classes.btn}>Buy Now</Button>
                                            </CardActions>
                                        </Card>

                                    </Grid>
                                )}
                            </Grid>
                        </div>
                        :
                        <div align='center'>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                {data.map(item =>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="200"
                                                    image={`/uploads/${item.img}`}
                                                    title="Contemplative Reptile" />
                                                <CardContent>
                                                    <Typography className={classes.cardTypo} align='center' gutterBottom variant="h5" component="h2">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="overline" color="textSecondary" component="p">
                                                        Quantity:  {item.quantity}
                                                    </Typography>
                                                    <Typography variant="overline" color="textSecondary" component="p">
                                                        MFD:  {item.MFD}
                                                    </Typography>
                                                    <Typography variant="overline" color="textSecondary" component="p">
                                                        EXP:  {item.EXP}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                            <Typography className={classes.bottomTypo} align='center'>{item.price} BDT</Typography>
                                            <CardActions>
                                                <Button id={item._id} onClick={(e) => {
                                                    handleClick(item)
                                                }} color='secondary' variant='contained' className={classes.btn}>Buy Now</Button>
                                            </CardActions>
                                        </Card>

                                    </Grid>
                                )}
                            </Grid>
                        </div>
                    }
                </>
                : null
            }
        </div>
    )
}
