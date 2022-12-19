export type UserRoyaltyContractType = {
  addresses: string[];
  tenant_id: string;
  user_id: string;
  royalty_contracts: RoyaltContractType[]
}
 export type RoyaltContractType = {
  id: string;
  company_id: string;
  platform: {};
  address: string;
  participants: {}[];
  blockchain: {}[];
  chain_id: number;
  contract_action_id: string;
  is_contract: boolean;
}