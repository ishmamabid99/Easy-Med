import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import HomeDrawer from './HomeDrawer';
import ShowAll from './ShowAll';
import ShowOrganization from './ShowOrganization';
import ShowUser from './ShowUser';
const useStyles = makeStyles(() => ({
    root: {

    }
}))
function Home() {
    const classes = useStyles();
    const [page, setPage] = React.useState("ORGANIZATION")
    useEffect(() => {
        console.log(page)
    }, [page])
    return (
        <div>
            <HomeDrawer setPage={setPage} />
            {page === 'USER' ?
                <ShowUser />
                :
                null
            }
            {page === 'ORGANIZATION' ?
                <ShowOrganization />
                :
                null
            }
            {page === 'MAP' ?
                <ShowAll />
                :
                null
            }
        </div>
    )
}

export default Home
