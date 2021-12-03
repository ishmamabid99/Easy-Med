import { Avatar, Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { updateProfile, updateRes } from '../../../methods/postData';
import { SwlError } from '../../../methods/Swal';
const useStyles = makeStyles(theme => ({
    Icons: {
        height: "8rem",
        width: "8rem",
        marginTop: "1rem",

    },
    input: {
        display: 'none'
    },
    root: {
        marginTop: "6rem",
    },
    heading: {
        color: "#2C2E43",
        fontFamily: "Robot condensed",
        fontSize: `2rem`,
        fontWeight: "700"
    },
    inputFeild: {
        marginTop: "1rem",
        width: '20rem'
    },
    form: {
        width: "20rem"
    },
    formControl: {
        marginTop: "3rem"
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
    }
}))
export default function Incomplete() {

    const classes = useStyles();
    const [image, setImage] = useState('');
    const [data, setData] = useState(undefined)
    const [file, setFile] = useState(undefined)
    async function handleSubmit(e) {
        e.preventDefault();
        if (data && data.role && data.sales && data.products && file) {
            const res1 = updateRes(data);
            const res2 = updateProfile(file);
            Promise.all([res1, res2]).then(() => {
                window.location.href('/app')
            })
        }
        else {
            SwlError();
        }
    }
    return (
        <div align='center' className={classes.root}>
            <Typography className={classes.heading}>Please submit the below form to complete your signup status</Typography>
            <form className={classes.form} noValidate autoComplete='off'>
                <input onChange={(e) => {
                    if (e.target.files[0]) {
                        setImage(
                            URL.createObjectURL(e.target.files[0])
                        );
                        setFile(e.target.files[0])
                    }
                }} accept="image/*" className={classes.input} id="icon-button-file" type="file" filename="articleImage" />
                <label htmlFor="icon-button-file">
                    <Avatar src={image} className={classes.Icons} />
                </label>
                <FormControl variant="standard" className={classes.formControl}>
                    <InputLabel id="org_type">What kind of organization you are?</InputLabel>
                    <Select
                        align='left'
                        className={classes.inputFeild}
                        labelId="demo-simple-select-outlined-label"
                        id="org_type"
                        onChange={(e) => {
                            setData({ ...data, role: e.target.value })
                        }}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"LOCAL"}>Local</MenuItem>
                        <MenuItem value={"LARGE"}>Large Scale</MenuItem>
                    </Select>
                </FormControl>
                <TextField onChange={(e) => { setData({ ...data, sales: e.target.value }) }} className={classes.inputFeild} label='Your monthly sales in BDT' />
                <TextField onChange={(e) => { setData({ ...data, products: e.target.value }) }} className={classes.inputFeild} label='Number of products' />
                <Button onClick={(e) => handleSubmit(e)} className={classes.btn}>Submit</Button>
            </form>
        </div>
    )
}
