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

export enum WalletStatusEnum {
  UNVERIFIED = 'unverified',
  READY = 'ready',
  BLOCKED = 'blocked',
}

export enum WalletTypeEnum {
  VAULT = 'vault',
  METAMASK = 'metamask',
}

export type UserWallet = {
  wallet_id: string;
  owner_id: string;
  tenant_id: string;
  address: string;
  type: WalletTypeEnum;
  status: WalletStatusEnum;
  verification_nonce: number;
};

export type UserWallets = {
  user_id: string;
  tenant_id: string;
  email: string;
  name: string;
  roles: UserRoleEnum[];
  main_wallet: UserWallet;
  wallets: UserWallet[];
};

export enum TenantRoleEnum {
  Application = 'application',
  Admin = 'administrator',
  Integration = 'integration',
}
export enum UserRoleEnum {
  SuperAdmin = 'superAdmin',
  Admin = 'admin',
  User = 'user',
}