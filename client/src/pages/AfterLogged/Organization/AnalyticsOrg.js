import React, { useEffect, useState } from 'react'
import AnalyticsShow from '../AnalyticsShow'
import axios from '../../../methods/axios'
import Cookies from 'js-cookie'
export default function AnalyticsOrg(props) {
    const [data, setData] = useState(undefined);
    const [graphData, setGraphData] = useState(undefined)
    useEffect(() => {
        const token = Cookies.get('access')
        axios.get(`/largedata/${props.state._id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            if (res.status === 200) {
                let retData = {};
                let labels = [];
                let labelData1 = [];
                let labelData2 = [];
                res.data.forEach(element => {
                    labels.push(element.name);
                    labelData1.push(element.initial);
                    labelData2.push(element.quantity);
                });
                retData = {
                    labels,
                    datasets: [
                        {
                            label: 'Initial',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: labelData1,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)'
                        },
                        {
                            label: 'Current',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: labelData2,
                            backgroundColor: 'rgba(53, 162, 235, 0.5)'
                        }
                    ]
                }
                setData(retData)
            }

        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {data ?

                <AnalyticsShow data={data} />
                : null
            }
        </div>
    )
}
