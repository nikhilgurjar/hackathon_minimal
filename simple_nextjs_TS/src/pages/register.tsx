// next
import Head from 'next/head';
// auth
import GuestGuard from '../auth/GuestGuard';
// sections
import Login from '../sections/auth/Login';
import { Paper, Stack } from '@mui/material';
import { Block } from 'src/sections/@dashboard/general/app/Block';
import HorizontalLinearStepper from 'src/sections/@dashboard/general/app/HorizontalLinearStepper';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> Login | Minimal UI</title>
      </Head>

      <GuestGuard>
        <Stack spacing={3} sx={{maxWidth:'600px',margin: 'auto auto',height:'100%'}}>
          <Block title="Horizontal Linear Stepper">
            
              <HorizontalLinearStepper />
      
          </Block>
          </Stack>
      </GuestGuard>
    </>
  );
}
