import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/main';
import { NextPage } from 'next';
import { OverviewActiveSubscribers } from "../sections/overview-active-subscribers";
import { OverviewTotalSubscribers } from "../sections/overview-total-subscribers";
import { ChurnRate } from "../sections/overview-churn-rate";
import { OverviewTotalProfit } from "../sections/overview-total-profit";
import { OverviewMRR } from "../sections/overview-mrr";
import FileUploadInput from '@/components/FileUpload';

const Page = () => (
  <>
    <Head>
      <title>
        Overview
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <FileUploadInput />
        <Grid
          container
          spacing={3}
        >
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalSubscribers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="1.6k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewActiveSubscribers difference={12} positive sx={{ height: "100%" }} value="$24k" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <ChurnRate sx={{ height: "100%" }} value={23.4} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="R$52.3k" />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewMRR
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page: NextPage) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
