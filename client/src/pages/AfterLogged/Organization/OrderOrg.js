import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { getOrderDataLarge } from '../../../methods/getData';
import { addToLocal, deleteOrder, updateInventory } from '../../../methods/postData';
const useStyles = makeStyles(theme => ({
    mobileRoot: {
        width: '100vw',
        height: '100vh',
    },
    root: {
        marginLeft: 250,
        flexGrow: 1,
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
    acceptBtn: {
        fontFamily: "Abhaya",
        background: "#2C394B",
        color: "#fff",
        "&:hover": {
            background: "#2C394B",
            color: "#fff"
        },
        marginRight: '2rem'
    },
    rejectBtn: {
        marginLeft: '1.5rem',
        fontFamily: "Abhaya",
        background: "#grey",
        color: "#2C3948",
        "&:hover": {
            background: "#grey",
            color: "#2C3948"
        },
    },
    rejectBtnMbl: {
        marginLeft: '3rem',
        fontFamily: "Abhaya",
        background: "#grey",
        color: "#2C3948",
        "&:hover": {
            background: "#grey",
            color: "#2C3948"
        },
    },
    typo: {
        marginTop: "20rem",
        fontFamily: "Roboto condensed",
        fontSize: "2.5rem",
        fontWeight: "900",
        opacity: "0.8",
        color: "grey"
    },
}))

export default function OrderOrg() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const [data, setData] = React.useState(undefined)
    async function getData() {
        const res = await getOrderDataLarge();
        Promise.all([res]).then(() => {
            setData(res.data);
        })
    }
    React.useEffect(() => {
        getData();
    }, []);
    async function handleAccept(item) {
        const res = await updateInventory(item);
        if (res) {
            const ret = await deleteOrder(item);
            if (ret) {
                const done = await addToLocal(item);
                if (done) {
                    window.location.href = '/app'
                }
            }
        }
    }
    async function handleReject(item) {
        const res = await deleteOrder(item);
        if (res) {
            window.location.href = '/app'
        }
    }
    return (
        <div>
            {!isMatch ?
                <>
                    {data ?
                        <>
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
                                                        <Typography variant="overline" color="textSecondary" component="p">
                                                            Quantity:  {item.quantity}
                                                        </Typography>
                                                        <Typography variant="overline" color="textSecondary" component="p">
                                                            Total:  {item.price * item.quantity} BDT
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>

                                                <Typography className={classes.bottomTypo} align='center'>{item.price} BDT</Typography>
                                                <CardActions >
                                                    <div>
                                                        <Button onClick={() => { handleAccept(item) }} size='large' className={classes.acceptBtn} variant='contained'>Accept</Button>
                                                        <Button onClick={() => { handleReject(item) }} size='large' className={classes.rejectBtn} variant='contained'>Reject</Button>
                                                    </div>
                                                </CardActions>
                                            </Card>

                                        </Grid>
                                    )}
                                </Grid>
                            </div>
                        </> : <Typography align='center' className={classes.typo}>No order recieved yet</Typography>

                    }
                </>
                :
                <>
                    {data ?
                        <>

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
                                                            {item.seller}
                                                        </Typography>
                                                        <Typography variant="overline" color="textSecondary" component="p">
                                                            Quantity:  {item.quantity}
                                                        </Typography>
                                                        <Typography variant="overline" color="textSecondary" component="p">
                                                            Total:  {item.price * item.quantity} BDT
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <Typography className={classes.bottomTypo} align='center'>{item.price} BDT</Typography>
                                                <CardActions>
                                                    <div align='center'>
                                                        <Button onClick={() => handleAccept(item)} size='large' className={classes.acceptBtn} variant='contained' >Accept</Button>
                                                        <Button onClick={() => handleReject(item)} size='large' className={classes.rejectBtnMbl} variant='contained' >Reject</Button>
                                                    </div>
                                                </CardActions>
                                            </Card>

                                        </Grid>
                                    )}
                                </Grid>
                            </div>
                        </> :
                        null

                    }
                </>
            }
        </div>
    )
}
