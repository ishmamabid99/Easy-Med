import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Cookies from 'js-cookie'
import React from 'react'
import axios from '../../../methods/axios'
const useStyles = makeStyles(theme => ({
    mobileRoot: {
        width: '100vw',
        height: '100vh',
    },
    root: {
        marginLeft: 280,
        flexGrow: 1,
        marginRight: 10,
        marginBottom: "10rem"
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
        marginLeft: '1.5rem',
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
export default function LocalOrder(props) {
    const [data, setData] = React.useState(undefined)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    React.useEffect(() => {
        const token = Cookies.get('access')
        const result = axios.get(`/getuserorder/${props.state.name}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((result) => {
            setData(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])
    const handleAccept = (data) => {
        const token = Cookies.get('access');
        axios.post('/acceptuserorder', { data: data }, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            if (res.status === 200) {
                window.location.href = '/app'
            }
        }).catch(err => {
            console.log(err)
        })
    }
    const handleReject = (data) => {
        const token = Cookies.get('access');
        axios.get(`/deleteuserorder/${data._id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            if (res.status === 200) {
                console.log(res)
                window.location.href = '/app'
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            {data ?
                <>
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
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography variant="overline" color="textSecondary" component="p">
                                                                    Order from:  {item.buyer}
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

                                                            <Button onClick={() => { handleAccept(item) }} size='large' className={classes.acceptBtn} variant='contained'>Accept</Button>
                                                            <Button onClick={() => { handleReject(item) }} size='large' className={classes.rejectBtn} variant='contained'>Reject</Button>

                                                        </CardActions>
                                                    </Card>

                                                </Grid>
                                            )}
                                        </Grid>
                                    </div>
                                </> :
                                <Typography align='center' className={classes.typo}>No order recieved yet</Typography>


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
                </>
                :
                null
            }
        </div>
    )
}
