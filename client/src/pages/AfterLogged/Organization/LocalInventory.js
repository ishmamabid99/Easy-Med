import axios from '../../../methods/axios'
import React from 'react'
import Cookies from 'js-cookie'
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
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
        marginBottom: "1rem",
        fontSize: '1.5rem',
        fontFamily: "Roboto cursive",
        fontWeight: "500"
    }
}))
export default function LocalInventory(props) {
    const classes = useStyles();
    const [data, setData] = React.useState(undefined);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    React.useEffect(() => {
        const token = Cookies.get('access');
        const res = axios.get(`/getlocalinventory/${props.state.name}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            if (res.status === 200) {
                setData(res.data)
                console.log(data)
            }

        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
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
                                                        {item.seller}
                                                    </Typography>
                                                    <Typography variant="overline" color="textSecondary" component="p">
                                                        Quantity:  {item.quantity}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                            <Typography className={classes.bottomTypo} align='center'>{item.price} BDT</Typography>

                                        </Card>

                                    </Grid>
                                )}
                            </Grid>
                        </div>

                    }
                </>
                :
                null
            }

        </div>
    )
}
