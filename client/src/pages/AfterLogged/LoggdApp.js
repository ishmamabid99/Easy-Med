import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import LoggedAppBar from './components/LoggedAppBar'
import jwt_decode from 'jwt-decode'
import { CircularProgress, makeStyles } from '@material-ui/core'
import UserApp from './User/UserApp'
import OrganizationApp from './Organization/OrganizationApp'
import { getInfo } from '../../methods/getData'
const useStyles = makeStyles(theme => ({
    progressBar: {

        width: "100px",
        height: "100px",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",

    }
}))
function LoggdApp() {
    const classes = useStyles();
    const [state, setState] = useState(undefined)
    async function getData() {
        const data = jwt_decode(Cookies.get('access'));
        const res = await getInfo(data._id);
        Promise.all([res]).then(() => {
            console.log(res.data)
            setState(res.data);
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>

            {state ?
                <div >
                    {state.role === 'USER' ?
                        <UserApp state={state} />
                        :
                        <OrganizationApp state={state} />
                    }
                </div>
                :
                <CircularProgress className={classes.progressBar} color='inherit' />

            }
        </>
    )
}

export default LoggdApp
