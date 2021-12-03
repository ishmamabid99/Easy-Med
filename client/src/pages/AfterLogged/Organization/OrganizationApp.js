import React from 'react'
import Incomplete from './Incomplete'
import LargeScaleOrganization from './LargeScaleOrganization'
import LocalOrganization from './LocalOrganization'

export default function OrganizationApp(props) {
    return (
        <div>
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
