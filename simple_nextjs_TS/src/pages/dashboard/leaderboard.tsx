// next
import Head from 'next/head';
import dynamic from 'next/dynamic';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Container, CardHeader, CardContent } from '@mui/material';
// routes
// config
import { MAP_API } from 'src/config-global';
// sections
const MapChangeTheme = dynamic(() => import('src/sections/@dashboard/general/app/map/index'));

// ----------------------------------------------------------------------

const THEMES = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v11',
};

const baseSettings = {
  mapboxAccessToken: MAP_API,
  minZoom: 1,
};

const StyledMapContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DemoMapPage() {

  const mapLeaderboardData = [
    {
      name: "Mundhwa",
      latlng: [18.548914,73.8669946],
      level: 1
    },
    {
      name: "Katraj",
      latlng: [18.4442851,73.8420803],
      level: 2
    },
    {
      name: "Magarpatta",
      latlng: [18.516008,73.9151952],
      level: 3
    },
    {
      name: "Amanora",
      latlng: [18.5184141,73.9321646],
      level: 4
    },
    {
      name: "Baner",
      latlng: [18.5600111,73.7632013],
      level: 5
    },
    {
      name: "Hinjawadi",
      latlng: [18.5994761,73.6760192],
      level: 6
    }
  ]

  return (
    <>
      <Head>
        <title> Extra Components: Map | Minimal UI</title>
      </Head>
      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Change Theme" />
            <CardContent>
              <StyledMapContainer>
                <MapChangeTheme data={mapLeaderboardData} {...baseSettings} themes={THEMES} />
              </StyledMapContainer>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
