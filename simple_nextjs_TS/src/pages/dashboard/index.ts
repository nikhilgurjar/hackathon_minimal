import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/dashboard') {
      router.push('/dashboard/air_quality');
    }
  });

  return null;
}
