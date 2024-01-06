import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/main';
import { NextPage } from 'next';

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
        <Grid
          container
          spacing={3}
        >
          Estrutura inicial - Overview
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
