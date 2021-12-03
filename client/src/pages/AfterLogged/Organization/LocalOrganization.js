import React, { useEffect, useState } from 'react'
import DrawerApp from '../components/DrawerApp'
import LocalAnalytics from './LocalAnalytics';
import LocalInventory from './LocalInventory';
import LocalMarket from './LocalMarket';
import LocalOrder from './LocalOrder'

export default function LocalOrganization(props) {
    const [page, setPage] = useState('orders');
    useEffect(() => {
        console.log(page)
    }, [page])

    return (
        <div>
            <DrawerApp
                setPage={setPage}
                state={props.state}
                show={false}
            />
            {page === 'orders' ?
                <LocalOrder state={props.state} />
                :
                null
            }
            {page === 'analytics' ?
                <LocalAnalytics state={props.state} />
                :
                null
            }
            {page === 'inventory' ?
                <LocalInventory state={props.state} />
                :
                null
            }
            {page === 'market' ?
                <LocalMarket state={props.state} />
                :
                null
            }
        </div>
    )
}
