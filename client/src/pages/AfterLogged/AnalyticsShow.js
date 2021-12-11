import React from 'react'
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 280
    }
}))

export default function AnalyticsShow(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            {!isMatch ?
                <div className={classes.root}>
                    <Bar

                        data={props.data}
                        options={{
                            responsive: true,
                            title: {
                                display: true,
                                text: 'Product sales',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
                :
                <div align='center'>
                    <Bar

                        data={props.data}
                        options={{
                            responsive: true,
                            title: {
                                display: true,
                                text: 'Product sales',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            }

        </div>
    )
}
