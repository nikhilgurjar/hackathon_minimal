// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Sustainablity Challange App',
    items: [
      { title: 'Air Quality Index', path: PATH_DASHBOARD.air_quality, icon: ICONS.dashboard },
      { title: 'leaderboard', path: PATH_DASHBOARD.leaderboard, icon: ICONS.ecommerce }
    ],
  }
];

export default navConfig;
