import Cookies from 'js-cookie';
import React from 'react'
import axios from '../../../methods/axios'
import AnalyticsShow from '../AnalyticsShow';

export default function LocalAnalytics(props) {
    const [data, setData] = React.useState(undefined);
    React.useEffect(() => {
        const token = Cookies.get('access')
        axios.get(`/smalldata/${props.state.name}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            if (res.status === 200) {
                console.log(res)
                let retData = {};
                let labels = [];
                let labelData1 = [];
                let labelData2 = [];
                res.data.forEach(element => {
                    console.log(element)
                    labels.push(element.seller);
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
