// next
import Head from 'next/head';
import { Container, Grid, Stack, Button, Card } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import { SeoIllustration } from '../../assets/illustrations';
import { useAuthContext } from '../../auth/useAuthContext';

import { useTheme } from '@mui/material/styles';
import {
  AppWidget,
  AppWelcome,
  AppTopAuthors,
  AppAreaInstalled,
  AppWidgetSummary,
  AnalyticsCurrentVisits
} from '../../sections/@dashboard/general/app';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import TextList from 'src/sections/@dashboard/general/app/TextList';
import UserAccountPage from 'src/sections/@dashboard/general/app/Recommendations';
import GoogleMaps from '../../components/places_autocomplete'
// ----------------------------------------------------------------------

PageOne.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();
  const { user } = useAuthContext();
  const theme = useTheme();
  const _appAuthors = [{
    id: 1,
    name: 'Mundhwa',
    level: 1
  },
  {
    id: 2,
    name: 'Magarpatta',
    level: 3
  },
  {
    id: 3,
    name: 'Baner',
    level: 2
  },
  {
    id: 4,
    name: 'Katraj',
    level: 4
  },
];

const pollutantReason = [
  {
    name: 'Co2',
    reason: 'Carbon emission'
  },
  {
    name: 'CO',
    reason: 'Heavy Traffic'
  },
  {
    name: 'Sulpher',
    reason: 'Heavy Construction'
  },
  {
    name: 'Ozone depletion',
    reason: 'Too many ACs'
  }
]

const pollutantEffects = [
  {
    name: 'Co2',
    reason: 'May lead to asthama'
  },
  {
    name: 'CO',
    reason: 'May lead to lung disease'
  },
  {
    name: 'Sulpher',
    reason: 'Can lead to chronic cancer'
  },
  {
    name: 'Ozone depletion',
    reason: 'Can lead to cancer issues'
  }
]

const pollutantRecommendations = ["Be inside home during hot summers","Keep ACs off during winter if possible"]

  return (
    <>
      <Head>
        <title> Page One | Minimal UI</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
      <GoogleMaps />
      </Grid>
      <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Air Quality Level`}
              value={30}
              description="Not livable"
              img={
                <GppMaybeIcon sx={{
                  width:"5em",
                  height:'5em',
                  margin:'auto auto',
                  paddingLeft:'10px',
                  fill:'red'
                }}/>
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Searches" list={_appAuthors} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled
              title="Air quality trend"
              subheader="40% degraded in last two months"
              chart={{
                colors: [theme.palette.error.dark],
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                data: [
                      { name: 'Quality level', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ]
                 
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits
              title="Pollutant ratio"
              chart={{
                series: [
                  { label: 'CO2', value: 4344 },
                  { label: 'CO', value: 5435 },
                  { label: 'Ozone', value: 1443 },
                  { label: 'Sulpher', value: 4443 },
                ],
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                ],
              }}
            />
          </Grid>
          <Grid item xs={12}>
         <Card sx={{width:'100%',pt:'20px'}}>
         <UserAccountPage pollutantRecommendations={pollutantRecommendations}  
          pollutantEffects={pollutantEffects}
          pollutantReason={pollutantReason}
          />
         </Card>
          </Grid>
      </Grid>
      </Container>
    </>
  );
}
