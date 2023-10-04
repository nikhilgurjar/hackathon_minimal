// @mui
import { styled } from '@mui/material/styles';
import { Typography, CardProps, Stack } from '@mui/material';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

// ----------------------------------------------------------------------

const airqualityLevelColors = {
  "worst":{
    startColor: "#B71D18",
      endColor: "#7A0916"
  },
  "best":{
    startColor: "#86E8AB",
      endColor: "#36B37E"
  },
  "danger":{
    startColor: "#FFAB00",
      endColor: "#B76E00"
  }
}


enum airqualityLevelText{
  worst = "This is worst place to live and  can degrade later also",
  best = "This is good air quality with great index.",
  danger = "This area is prone to worst quality if actions not taken now."
}

const StyledRoot = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  paddingTop: '20px',
  color: theme.palette.primary.darker,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const StyledBg = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: theme.palette.common.white,
  '&:before': {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -2,
    content: '""',
    opacity: 0.2,
    ...bgGradient({
      direction: '135deg',
      startColor: airqualityLevelColors['worst'].startColor,
      endColor: airqualityLevelColors['worst'].endColor,
    }),
  },
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  value?: number;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
}

export default function AppWelcome({ title, value, description, action, img, ...other }: Props) {
  return (
    <StyledRoot {...other}>
      <Stack
        flexGrow={1}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        sx={{
          pl: 5,
          py: { xs: 5, md: 0 },
          pr: { xs: 5, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
         <Typography paragraph variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {title}
        </Typography>

        <Typography paragraph variant="h4" sx={{ whiteSpace: 'pre-line' }}>
          {value}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.8,
            mb: { xs: 3, xl: 5 },
          }}
        >
          {airqualityLevelText['worst']}
        </Typography>

        {action && action}
      </Stack>

      {img && img}

      <StyledBg />
    </StyledRoot>
  );
}
