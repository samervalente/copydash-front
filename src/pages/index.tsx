"use client"
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/main';
import { NextPage } from 'next';
import { OverviewActiveSubscribers } from "../sections/overview-active-subscribers";
import { OverviewTotalSubscribers } from "../sections/overview-total-subscribers";
import { ChurnRate } from "../sections/overview-churn-rate";
import { OverviewTotalProfit } from "../sections/overview-total-profit";
import { MRRInterface, OverviewMRR } from "../sections/overview-mrr";
import FileUploadInput from '@/components/FileUpload';
import { useMutation } from 'react-query'
import { uploadSubscriptionMetricsData } from '@/services/axiosSubscriptionRequests';
import { useState } from 'react';
import { ChurnRateInterface, OverViewChurnRateChar } from '@/sections/overview-churn-rate-char';


interface Metrics {
  mrr: MRRInterface[],
  churnRate: { rate: ChurnRateInterface, totalActive: number, totalCancelled: number, totalSubscribers: number }
}

const Page = () => {
  const [metrics, setMetrics] = useState<Metrics>()
  const { mutate: handleFileUploadMutation } = useMutation(uploadSubscriptionMetricsData, {
    onSuccess: ({ data }) => {
      setMetrics(data)
    }
  })

  return <>
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
        <FileUploadInput handleUploadFile={handleFileUploadMutation} />
        {metrics && (
          <Grid
            container
            spacing={3}
          >
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalSubscribers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value={metrics.churnRate?.totalSubscribers}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewActiveSubscribers difference={12} positive sx={{ height: "100%" }} value={metrics.churnRate?.totalActive} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <ChurnRate sx={{ height: "100%" }} value={metrics.churnRate.totalCancelled} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="R$52.3k" />
            </Grid>
            <Grid xs={12} lg={6}>
              <OverviewMRR
                data={metrics.mrr}
              />
            </Grid>
            <Grid xs={12} lg={6}>
              <OverViewChurnRateChar
                data={metrics.churnRate}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  </>
}

Page.getLayout = (page: NextPage) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
