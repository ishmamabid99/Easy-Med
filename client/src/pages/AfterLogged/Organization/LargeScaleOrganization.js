import React, { useEffect, useState } from 'react'
import DrawerApp from '../components/DrawerApp'
import AddOrg from './AddOrg';
import AnalyticsOrg from './AnalyticsOrg';
import InventoryOrg from './InventoryOrg';
import OrderOrg from './OrderOrg';

export default function LargeScaleOrganization(props) {
    const [page, setPage] = useState('orders');
    useEffect(() => {
        console.log(page)
    }, [page])

    return (
        <div>
            <DrawerApp
                setPage={setPage}
                state={props.state}
                show={true}
            />
            {page === 'orders' ?
                <OrderOrg />
                :
                null
            }
            {page === 'analytics' ?
                <AnalyticsOrg state={props.state} />
                :
                null
            }
            {page === 'inventory' ?
                <InventoryOrg />
                :
                null
            }
            {page === 'add' ?
                <AddOrg state={props.state} />
                :
                null
            }
        </div>
    )
}
