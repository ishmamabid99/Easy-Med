import React from 'react'
import LoggedAppBar from '../components/LoggedAppBar'
import Incomplete from './Incomplete'
import LargeScaleOrganization from './LargeScaleOrganization'
import LocalOrganization from './LocalOrganization'

export default function OrganizationApp(props) {
    return (
        <div>
            <div>
                <LoggedAppBar state={props.state} />
            </div>
            {props.state.role === 'INCOMPLETE' ?
                <div>
                    <Incomplete state={props.state} />
                </div>
                :
                <div>
                    {props.state.role === 'LOCAL' ?
                        <LocalOrganization state={props.state} />
                        :
                        <LargeScaleOrganization state={props.state} />
                    }

                </div>

            }
        </div>
    )
}
