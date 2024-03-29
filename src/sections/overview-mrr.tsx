import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    SvgIcon,
} from '@mui/material';
import { BarChart } from '@/components/BarChart';
export interface MRRInterface {
    month: string,
    revenue: number
}

export const OverviewMRR = (props: { data: any }) => {
    const { data: mrrData } = props;


    const MRRData = {
        type: "bar",
        labels: mrrData?.map((data: MRRInterface) => data.month),
        datasets: [
            {
                label: mrrData?.symbol,
                data: mrrData?.map((data: MRRInterface) => data.revenue),
                tension: 0.4,
            },
        ],
    };
    return (
        <Card sx={{ width: "100%", heigth: "100%" }}>
            <CardHeader
                action={(
                    <Button
                        color="inherit"
                        size="small"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowPathIcon />
                            </SvgIcon>
                        )}
                    >
                        Sync
                    </Button>
                )}
                title="MRR"
            />


            <CardContent>
                {/* <Chart
                    height={350}
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    width="100%"
                /> */}
                <BarChart text='Receita recorrente mensal para o ano de 2022' title='' chartData={MRRData} />
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <ArrowRightIcon />
                        </SvgIcon>
                    )}
                    size="small"
                >
                    Overview
                </Button>
            </CardActions>
        </Card>
    );
};

