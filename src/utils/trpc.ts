// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { ClientAppRouter } from '../../dataflow-api';

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMmI3NDY5Ny0xYmRkLTQ2ZTctOTVhNS02NDFjYzdhYTFjMWIiLCJpc3MiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJhdWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJuYW1lIjoidGVzdGUtMSIsInJvbGVzIjpbInN1cGVyQWRtaW4iXSwidGVuYW50SWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJ2ZXJpZmllZCI6ZmFsc2UsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjcxNDc2NDE5LCJleHAiOjE2NzE0NzczMTl9.JT6nYxI1WOU85KP8vFlNRbsrwxBDCeY-cHlC2TeG1AeMRXQ8EjEo56qvR8_lXQHK0io9VsN7qcvHX3eWjZEF0X_lF8Fk35g0ZbF99rRPApnnkuc6olf2CBxpcYBa2_CcDaSWll-SGiRs8k6uNr4V8e1uAiLb4ifcpDSKhTvdxcg';
 
// Notice the <AppRouter> generic here.
const trpc = createTRPCProxyClient<ClientAppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
  ],
});

export const findManyUserRoyaltyContract  = async (tenantId: string) => await trpc.protected.findManyUserRoyaltyContract.query({ tenantId });

export const findManyUserWallet = async (tenantId: string) => await trpc.protected.findManyUserWallet.query({ tenantId });

export const getServerInfo = async () => await trpc.public.getServerInfo.query();