// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { ClientAppRouter } from '../../dataflow-api';

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMmI3NDY5Ny0xYmRkLTQ2ZTctOTVhNS02NDFjYzdhYTFjMWIiLCJpc3MiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJhdWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJuYW1lIjoidGVzdGUtMSIsInJvbGVzIjpbInN1cGVyQWRtaW4iXSwidGVuYW50SWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJ2ZXJpZmllZCI6ZmFsc2UsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjcxNTAyMjI4LCJleHAiOjE2NzE1MDMxMjh9.Ytugk_FgvGYspeeFUx5NpHfeN2oGV5izRBm4vn635LJin7n96EhiCCS7BiLSTvKsY6Y48EiA-V2AY0kptpfVMksLbfMYcZf8T0xRXaybIsp34x-0alGlYD1nZOq5OYz8OqmRRYh9fRowCki8GrmTFaBshZrcD9Xi7mGtiOrUr4w';
 
// Notice the <AppRouter> generic here.
const trpc = createTRPCProxyClient<ClientAppRouter>({
  links: [
    httpBatchLink({
      url: process.env.baseUrl!,
      headers: {
        authorization: `Bearer ${process.env.token}`,
      },
    }),
  ],
});

export const findManyUserRoyaltyContract  = async (tenantId: string) => await trpc.protected.findManyUserRoyaltyContract.query({ tenantId });

export const findManyUserWallet = async (tenantId: string) => await trpc.protected.findManyUserWallet.query({ tenantId });

export const getServerInfo = async () => await trpc.public.getServerInfo.query();