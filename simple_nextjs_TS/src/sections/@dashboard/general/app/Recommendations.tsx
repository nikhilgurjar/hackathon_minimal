import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Container, Tab, Tabs, Box } from '@mui/material';
// sections
import AssistantIcon from '@mui/icons-material/Assistant';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TextList from './TextList';
import RecommendationsList from './RecommendationsList';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
interface TextListProps{
  data:{
      name: string,
      reason: string
  }[]
}

interface recommendationTabProps{
  pollutantEffects: TextListProps,
  pollutantReason: TextListProps,
  pollutantRecommendations: string[]
}
export default function UserAccountPage(tabData:recommendationTabProps) {

  const [currentTab, setCurrentTab] = useState('Reasons');
console.log(tabData)
  const TABS = [
    {
      value: 'Reasons',
      label: 'Reasons',
      icon: <TipsAndUpdatesIcon />,
      component: <TextList data={tabData.pollutantReason}/>,
    },
    {
      value: 'Effects',
      label: 'Effects',
      icon: <WarningAmberIcon />,
      component: (
<TextList data={tabData.pollutantEffects}/>
      ),
    },
    {
      value: 'Recommendations',
      label: 'Recommendations',
      icon: <AssistantIcon />,
      component: <RecommendationsList data={tabData.pollutantRecommendations}/>,
    }
  ];

  return (
    <>
      <Head>
        <title> User: Account Settings | Minimal UI</title>
      </Head>

      <Container maxWidth={'lg'}>

        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
}
