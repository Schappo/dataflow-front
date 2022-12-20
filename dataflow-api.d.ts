import * as _trpc_server from '@trpc/server';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { OnModuleInit, INestApplication, Logger, OnModuleDestroy } from '@nestjs/common';
import { Sql } from 'postgres';
import { PrismaClient, ComponentType } from '@prisma/client';
import z from 'zod';

declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}

declare const ComponentName: {
    readonly wl_db_id: "wl_db_id";
    readonly wl_db_key: "wl_db_key";
    readonly wl_db_dir: "wl_db_dir";
    readonly wl_kafka: "wl_kafka";
    readonly wl_dbz_id: "wl_dbz_id";
    readonly wl_dbz_key: "wl_dbz_key";
    readonly wl_mz_id: "wl_mz_id";
    readonly wl_mz_key: "wl_mz_key";
};
declare type ComponentNameType = typeof ComponentName[keyof typeof ComponentName];
declare const ComponentSchema: z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<z.extendShape<{
    id: z.ZodString;
    name: z.ZodEnum<[ComponentNameType]>;
    type: z.ZodType<ComponentType, z.ZodTypeDef, ComponentType>;
    secrets: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    config: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    type: z.ZodLiteral<"POSTGRES">;
    secrets: z.ZodObject<{
        user: z.ZodString;
        pass: z.ZodString;
        host: z.ZodString;
        port: z.ZodNumber;
        database: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    }, {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    }>;
    config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}>, "strip", z.ZodTypeAny, {
    type: "POSTGRES";
    id: string;
    name: ComponentNameType;
    secrets: {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    };
    config: {};
    createdAt: Date;
    updatedAt: Date;
}, {
    type: "POSTGRES";
    id: string;
    name: ComponentNameType;
    secrets: {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    };
    config: {};
    createdAt: Date;
    updatedAt: Date;
}> | z.ZodObject<z.extendShape<{
    id: z.ZodString;
    name: z.ZodEnum<[ComponentNameType]>;
    type: z.ZodType<ComponentType, z.ZodTypeDef, ComponentType>;
    secrets: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    config: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    type: z.ZodLiteral<"MATERIALIZE">;
    secrets: z.ZodObject<{
        user: z.ZodString;
        pass: z.ZodString;
        host: z.ZodString;
        port: z.ZodNumber;
        database: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    }, {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    }>;
    config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}>, "strip", z.ZodTypeAny, {
    type: "MATERIALIZE";
    id: string;
    name: ComponentNameType;
    secrets: {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    };
    config: {};
    createdAt: Date;
    updatedAt: Date;
}, {
    type: "MATERIALIZE";
    id: string;
    name: ComponentNameType;
    secrets: {
        user: string;
        pass: string;
        host: string;
        port: number;
        database: string;
    };
    config: {};
    createdAt: Date;
    updatedAt: Date;
}> | z.ZodObject<z.extendShape<{
    id: z.ZodString;
    name: z.ZodEnum<[ComponentNameType]>;
    type: z.ZodType<ComponentType, z.ZodTypeDef, ComponentType>;
    secrets: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    config: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    type: z.ZodLiteral<"KAFKA">;
    secrets: z.ZodObject<{
        broker: z.ZodObject<{
            key: z.ZodString;
            secret: z.ZodString;
            host: z.ZodString;
            port: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            host: string;
            port: number;
            key: string;
            secret: string;
        }, {
            host: string;
            port: number;
            key: string;
            secret: string;
        }>;
        registry: z.ZodObject<{
            host: z.ZodString;
            port: z.ZodNumber;
            protocol: z.ZodEnum<["http", "https"]>;
        }, "strip", z.ZodTypeAny, {
            host: string;
            port: number;
            protocol: "http" | "https";
        }, {
            host: string;
            port: number;
            protocol: "http" | "https";
        }>;
    }, "strip", z.ZodTypeAny, {
        broker: {
            host: string;
            port: number;
            key: string;
            secret: string;
        };
        registry: {
            host: string;
            port: number;
            protocol: "http" | "https";
        };
    }, {
        broker: {
            host: string;
            port: number;
            key: string;
            secret: string;
        };
        registry: {
            host: string;
            port: number;
            protocol: "http" | "https";
        };
    }>;
    config: z.ZodObject<{
        broker: z.ZodObject<{
            clientId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            clientId: string;
        }, {
            clientId: string;
        }>;
        registry: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        broker: {
            clientId: string;
        };
        registry: {};
    }, {
        broker: {
            clientId: string;
        };
        registry: {};
    }>;
}>, "strip", z.ZodTypeAny, {
    type: "KAFKA";
    id: string;
    name: ComponentNameType;
    secrets: {
        broker: {
            host: string;
            port: number;
            key: string;
            secret: string;
        };
        registry: {
            host: string;
            port: number;
            protocol: "http" | "https";
        };
    };
    config: {
        broker: {
            clientId: string;
        };
        registry: {};
    };
    createdAt: Date;
    updatedAt: Date;
}, {
    type: "KAFKA";
    id: string;
    name: ComponentNameType;
    secrets: {
        broker: {
            host: string;
            port: number;
            key: string;
            secret: string;
        };
        registry: {
            host: string;
            port: number;
            protocol: "http" | "https";
        };
    };
    config: {
        broker: {
            clientId: string;
        };
        registry: {};
    };
    createdAt: Date;
    updatedAt: Date;
}> | z.ZodObject<z.extendShape<{
    id: z.ZodString;
    name: z.ZodEnum<[ComponentNameType]>;
    type: z.ZodType<ComponentType, z.ZodTypeDef, ComponentType>;
    secrets: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    config: z.ZodDefault<z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    type: z.ZodLiteral<"DEBEZIUM">;
    secrets: z.ZodObject<{
        endpoint: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        endpoint: string;
    }, {
        endpoint: string;
    }>;
    config: z.ZodObject<{
        connector: z.ZodObject<{
            name: z.ZodString;
            config: z.ZodObject<{
                'slot.name': z.ZodString;
                'connector.class': z.ZodString;
                'tasks.max': z.ZodString;
                'plugin.name': z.ZodString;
                'database.hostname': z.ZodString;
                'database.port': z.ZodString;
                'database.user': z.ZodString;
                'database.password': z.ZodString;
                'database.dbname': z.ZodString;
                'database.server.name': z.ZodString;
                'table.include.list': z.ZodString;
                'publication.autocreate.mode': z.ZodString;
                'value.converter.schemas.enable': z.ZodBoolean;
                'topic.creation.default.replication.factor': z.ZodNumber;
                'topic.creation.default.partitions': z.ZodNumber;
                'topic.creation.default.cleanup.policy': z.ZodString;
                'topic.creation.default.compression.type': z.ZodString;
                'topic.creation.default.delete.retention.ms': z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            }, {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        }, {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        connector: {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        };
    }, {
        connector: {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        };
    }>;
}>, "strip", z.ZodTypeAny, {
    type: "DEBEZIUM";
    id: string;
    name: ComponentNameType;
    secrets: {
        endpoint: string;
    };
    config: {
        connector: {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        };
    };
    createdAt: Date;
    updatedAt: Date;
}, {
    type: "DEBEZIUM";
    id: string;
    name: ComponentNameType;
    secrets: {
        endpoint: string;
    };
    config: {
        connector: {
            name: string;
            config: {
                'slot.name': string;
                'connector.class': string;
                'tasks.max': string;
                'plugin.name': string;
                'database.hostname': string;
                'database.port': string;
                'database.user': string;
                'database.password': string;
                'database.dbname': string;
                'database.server.name': string;
                'table.include.list': string;
                'publication.autocreate.mode': string;
                'value.converter.schemas.enable': boolean;
                'topic.creation.default.replication.factor': number;
                'topic.creation.default.partitions': number;
                'topic.creation.default.cleanup.policy': string;
                'topic.creation.default.compression.type': string;
                'topic.creation.default.delete.retention.ms': number;
            };
        };
    };
    createdAt: Date;
    updatedAt: Date;
}>>;
declare type ComponentSchemaType = z.infer<typeof ComponentSchema>;

declare type VerificationResult = Record<ComponentNameType, {
    valid: boolean;
    message?: string;
}>;
declare class ComponentService {
    private prisma;
    readonly logger: Logger;
    constructor(prisma: PrismaService);
    validate(name: ComponentNameType): Promise<boolean>;
    verifyAll(): Promise<{
        components: Partial<VerificationResult>;
        valid: boolean;
    }>;
    loadComponentResolved<T extends ComponentSchemaType>(name: ComponentNameType): Promise<T>;
    loadComponent<T extends ComponentSchemaType>(name: ComponentNameType): Promise<T>;
    loadComponents<T extends ComponentSchemaType>(): Promise<T[]>;
}

declare class ClientService implements OnModuleInit, OnModuleDestroy {
    protected readonly componentService: ComponentService;
    protected logger: Logger;
    protected sql: Sql;
    constructor(componentService: ComponentService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
    createSqlClient(): Promise<Sql>;
    getSqlClient(): Promise<Sql>;
}

declare enum TenantRoleEnum {
    Application = "application",
    Admin = "administrator",
    Integration = "integration"
}
declare enum UserRoleEnum {
    SuperAdmin = "superAdmin",
    Admin = "admin",
    User = "user"
}
declare enum JwtType {
    User = "user",
    Tenant = "tenant"
}
declare type Context = {
    app: INestApplication;
    clientService: ClientService;
    logger: Logger;
    user?: UserContext;
};
declare type UserContext = {
    id: string;
    roles: UserRoleEnum[] | TenantRoleEnum[];
    type: JwtType;
    tenantId: string;
};

declare enum WalletStatusEnum {
    UNVERIFIED = "unverified",
    READY = "ready",
    BLOCKED = "blocked"
}
declare enum WalletTypeEnum {
    VAULT = "vault",
    METAMASK = "metamask"
}

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: Context;
    meta: {};
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
}>, {
    public: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: Context;
        meta: {};
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        getServerInfo: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: Context;
                meta: {};
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: {};
            _ctx_out: Context;
            _input_in: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
            } | undefined;
            _input_out: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
            } | undefined;
            _output_in: {
                version: string;
            };
            _output_out: {
                version: string;
            };
        }, unknown>;
    }>;
    protected: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: Context;
        meta: {};
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        findManyUserRoyaltyContract: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: Context;
                meta: {};
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: {};
            _ctx_out: _trpc_server.Overwrite<Context, {
                user: UserContext;
                app: INestApplication;
                clientService: ClientService;
                logger: Logger;
            }>;
            _input_in: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
                tenantId: string;
            };
            _input_out: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
                tenantId: string;
            };
            _output_in: {
                tenantId: string;
                addresses: string[];
                userId: string;
                royaltyContracts: {
                    id: string;
                    companyId: string;
                    platform: {};
                    address: string;
                    participants: {}[];
                    blockchain: {}[];
                    chainId: number;
                    contractActionId: string;
                    isContract: boolean;
                }[];
            }[];
            _output_out: {
                tenantId: string;
                addresses: string[];
                userId: string;
                royaltyContracts: {
                    id: string;
                    companyId: string;
                    platform: {};
                    address: string;
                    participants: {}[];
                    blockchain: {}[];
                    chainId: number;
                    contractActionId: string;
                    isContract: boolean;
                }[];
            }[];
        }, unknown>;
        findManyUserWallet: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: Context;
                meta: {};
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: {};
            _ctx_out: _trpc_server.Overwrite<Context, {
                user: UserContext;
                app: INestApplication;
                clientService: ClientService;
                logger: Logger;
            }>;
            _input_in: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
                tenantId: string;
            };
            _input_out: {
                _page?: number | undefined;
                _limit?: number | undefined;
                _sort?: "asc" | "desc" | undefined;
                tenantId: string;
            };
            _output_in: {
                tenantId: string;
                userId: string;
                email: string;
                name: string | null;
                roles: UserRoleEnum[];
                mainWallet: {
                    type: WalletTypeEnum;
                    status: WalletStatusEnum;
                    tenantId: string;
                    address: string;
                    walletId: string;
                    ownerId: string;
                    verificationNonce: number | null;
                } | null;
                wallets: {
                    type: WalletTypeEnum;
                    status: WalletStatusEnum;
                    tenantId: string;
                    address: string;
                    walletId: string;
                    ownerId: string;
                    verificationNonce: number | null;
                }[];
            }[];
            _output_out: {
                tenantId: string;
                userId: string;
                email: string;
                name: string | null;
                roles: UserRoleEnum[];
                mainWallet: {
                    type: WalletTypeEnum;
                    status: WalletStatusEnum;
                    tenantId: string;
                    address: string;
                    walletId: string;
                    ownerId: string;
                    verificationNonce: number | null;
                } | null;
                wallets: {
                    type: WalletTypeEnum;
                    status: WalletStatusEnum;
                    tenantId: string;
                    address: string;
                    walletId: string;
                    ownerId: string;
                    verificationNonce: number | null;
                }[];
            }[];
        }, unknown>;
    }>;
}>;
declare type AppRouter = typeof appRouter;

declare type RouterInput = inferRouterInputs<AppRouter>;
declare type RouterOutput = inferRouterOutputs<AppRouter>;
declare type FindManyUserWalletInput = RouterInput['protected']['findManyUserWallet'];
declare type FindManyUserWalletOutput = RouterOutput['protected']['findManyUserWallet'];
declare type FindManyUserRoyaltyContractInput = RouterInput['protected']['findManyUserRoyaltyContract'];
declare type FindManyUserRoyaltyContractOutput = RouterOutput['protected']['findManyUserRoyaltyContract'];

export { AppRouter as ClientAppRouter, FindManyUserRoyaltyContractInput, FindManyUserRoyaltyContractOutput, FindManyUserWalletInput, FindManyUserWalletOutput, RouterInput, RouterOutput };
