// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { ClientAppRouter, FindManyUserRoyaltyContractOutput, FindManyUserWalletOutput } from '../../dataflow-api';
 
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

export const findManyUserRoyaltyContract  = async (tenantId: string): Promise<FindManyUserRoyaltyContractOutput> => await trpc.protected.findManyUserRoyaltyContract.query({ tenantId });

export const findManyUserWallet = async (tenantId: string): Promise<FindManyUserWalletOutput> => await trpc.protected.findManyUserWallet.query({ tenantId });

export const getServerInfo = async () => await trpc.public.getServerInfo.query();