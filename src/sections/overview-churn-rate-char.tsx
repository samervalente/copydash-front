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


export interface ChurnRateInterface {
    month: string,
    rate: number,
    exceed: number
}

export const OverViewChurnRateChar = (props: { data: any }) => {
    const { data: churnRate } = props;

    const MRRData = {
        type: "bar",
        labels: churnRate.rate?.map((data: ChurnRateInterface) => data.month),
        datasets: [
            {
                label: '%',
                data: churnRate.rate?.map((data: ChurnRateInterface) => data.rate),
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
                title="Churn Rate"
            />

            <CardContent>
                <BarChart text='Taxa de churn para o período selecionado' chartData={MRRData} />
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
        </Card >
    );
};

