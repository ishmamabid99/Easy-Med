import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react'
import { getInventory } from '../../../methods/getData'
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
        fontSize: '1.5rem',
        fontFamily: "Roboto cursive",
        fontWeight: "500"
    }
}))
export default function InventoryOrg() {
    const [data, setData] = useState([])
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    async function getData() {
        const res = await getInventory();
        Promise.all([res]).then(() => {
            setData(res.data)
        })
    }
    React.useEffect(() => {
        getData();
        console.log(data)
    }, [])
    return (
        <>{!isMatch ?
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

                            </Card>

                        </Grid>
                    )}
                </Grid>
            </div>

        }
        </>
    )
}
