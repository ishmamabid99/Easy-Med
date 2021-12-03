import { Box, Button, IconButton, makeStyles, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { SwlSubmitErrorFrom} from '../../../methods/Swal';
import { postProduct, updateProduct } from '../../../methods/postData';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 240
    },
    formMobile: {
        marginBottom: "10rem",
    },
    inp: {
        marginTop: "1.25rem",
        width: "20rem"
    },
    icon: {
        fontSize: "1.5rem"
    },
    form: {
        marginBottom: "10rem",
        width: '20rem',
    },
    input: {
        display: 'none'
    },
    btn: {
        marginTop: "2rem",
        width: "20rem",
        backgroundColor: "#2C394B",
        color: '#fff',
        '&:hover': {
            backgroundColor: "#2C394B",
        },
        fontWeight: "600"
    },
    heading: {
        fontFamily: "Abhaya",
        fontWeight: "500",
        fontSize: "3rem",
        opacity: "0.8",
        marginBottom: "2rem"
    },
    headingMobile: {
        fontFamily: "Abhaya",
        fontWeight: "500",
        fontSize: "1.5rem",
        opacity: "0.8",
        margin: '2rem'
    }
}));
export default function AddOrg(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const [data, setData] = React.useState(undefined);
    const [image, setImage] = React.useState('')
    function handleChange(e) {
        if (e.target.id !== "icon-button-photo")
            setData({
                ...data,
                [e.target.id]: e.target.value
            })
    }
    async function handleClick() {
        let sendData = {
            ...data,
            _oid: props.state._id

        }
        if (data && data.name && data.quantity && data.price && data.MFD && data.EXP && image) {
            const res1 = await postProduct(sendData);
            Promise.all([res1]).then(() => {
                if (res1.data) {
                    updateProduct(image, res1.data._id);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        text: "Already medicine exists"
                    })
                }
            })
        }
        else {
            SwlSubmitErrorFrom()
        }
    }
    return (
        <>
            {!isMatch ?
                <Box align='center' className={classes.root}>
                    <Typography className={classes.heading}>Submit to add a new product in the market</Typography>
                    <form onChange={handleChange} className={classes.form}>
                        <TextField id='name' type='text' className={classes.inp} label='Name of your product' />
                        <TextField id='quantity' type='number' className={classes.inp} label='No of products' />
                        <TextField id='price' type='number' className={classes.inp} label='Saling price' />
                        <TextField id='MFD' type='date' className={classes.inp} helperText='Manufacturing date' />
                        <TextField id='EXP' type='date' className={classes.inp} helperText='Expiratioin date' />
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-photo"
                            type="file"
                            onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                        />
                        <TextField value={image.name} className={classes.inp} helperText='Upload a picture of your product' InputProps={{
                            readOnly: true,
                            endAdornment: <label htmlFor="icon-button-photo">
                                <IconButton color="primary" component="span">
                                    <PhotoCamera className={classes.icon} />
                                </IconButton>
                            </label>
                        }} />
                        <Button className={classes.btn} onClick={handleClick}>Submit</Button>
                    </form>
                </Box>
                :
                <Box align='center' >
                    <Typography className={classes.headingMobile}>Submit to add a new product in the market</Typography>
                    <form onChange={handleChange} className={classes.formMobile}>
                        <TextField id='name' type='text' className={classes.inp} label='Name of your product' />
                        <TextField id='quantity' type='number' className={classes.inp} label='No of products' />
                        <TextField id='price' type='number' className={classes.inp} label='Saling price' />
                        <TextField id='MFD' type='date' className={classes.inp} helperText='Manufacturing date' />
                        <TextField id='EXP' type='date' className={classes.inp} helperText='Expiratioin date' />
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-photo"
                            type="file"
                            onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                        />
                        <TextField value={image.name} className={classes.inp} helperText='Upload a picture of your product' InputProps={{
                            readOnly: true,
                            endAdornment: <label htmlFor="icon-button-photo">
                                <IconButton color="primary" component="span">
                                    <PhotoCamera className={classes.icon} />
                                </IconButton>
                            </label>
                        }} />
                        <Button className={classes.btn} onClick={handleClick}>Submit</Button>
                    </form>
                </Box>
            }
        </>
    )
}
