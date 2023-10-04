import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
// @mui
import { Card, CardHeader, Box, CardProps } from '@mui/material';
// components
// import { CustomSmallSelect } from '../../../../components/custom-input';
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    categories?: string[];
    colors?: string[];
    data: {
        name: string;
        data: number[];
      }[];

    options?: ApexOptions;
  };
}

export default function AppAreaInstalled({ title, subheader, chart, ...other }: Props) {
  const { colors, categories, data, options } = chart;

  const [seriesData, setSeriesData] = useState('2019');

  const chartOptions = useChart({
    colors,
    xaxis: {
      categories,
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
      />

  
        <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
            <Chart series={data} options={chartOptions} height={364} />
        </Box>
      
    </Card>
  );
}
