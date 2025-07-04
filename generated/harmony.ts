// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)



export interface paths {
  "/v1/analyse/address": {
    
    post: operations["AnalyseAddress"];
  };
  "/v1/analyse/url": {
    
    post: operations["AnalyseUrl"];
  };
  "/v1/balances": {
    
    get: operations["GetBalances"];
  };
  "/v2/balances": {
    
    post: operations["GetBalancesV2"];
  };
  "/v1/broadcast": {
    
    post: operations["Broadcast"];
  };
  "/v1/defi/earn/topOpportunity/{address}": {
    
    get: operations["GetTopOpportunity"];
  };
  "/v1/defi/opportunities/{address}": {
    
    post: operations["GetOppportunities"];
  };
  "/v1/defi/positions/{address}": {
    
    get: operations["GetAddressPositions"];
  };
  "/v1/defi/vaultInfo/{network}/{vaultAddress}": {
    
    get: operations["GetVaultInfo"];
  };
  "/v1/defi/vaultHistoricalMetrics/{network}/{vaultAddress}": {
    
    get: operations["GetVaultHistoricalMetrics"];
  };
  "/v1/defi/vaultTransactions/{network}/{vaultAddress}/{userAddress}": {
    
    get: operations["GetVaultTransactions"];
  };
  "/v1/explore": {
    
    get: operations["GetMainPageContent"];
  };
  "/v1/explore/page/{pageSlug}": {
    
    get: operations["GetPageContentBySlug"];
  };
  "/v1/explore/content/{contentId}": {
    
    get: operations["GetContentById"];
  };
  "/v1/fee": {
    
    get: operations["GetFees"];
  };
  "/v1/krakenConnectProxy": {
    
    post: operations["ProxyKrakenConnect"];
  };
  "/v1/nfts": {
    
    get: operations["GetNfts"];
  };
  "/v1/positions": {
    
    get: operations["GetPositions"];
  };
  "/v2/positions": {
    
    get: operations["GetPositionsV2"];
  };
  "/pow/request": {
    
    post: operations["GetChallenge"];
  };
  "/pow/submit": {
    
    post: operations["SubmitSolution"];
  };
  "/v1/price": {
    
    get: operations["GetPriceData"];
  };
  "/v2/price": {
    
    get: operations["GetPriceDataV2"];
  };
  "/v1/priceHistory": {
    
    get: operations["GetPriceHistoryData"];
  };
  "/v1/resolveAddressLabels": {
    
    get: operations["ResolveEnsAddresses"];
  };
  "/v1/resolveName": {
    
    get: operations["ResolveEnsName"];
  };
  "/v1/rpc": {
    
    post: operations["Rpc"];
  };
  "/v1/simulate": {
    
    post: operations["Simulate"];
  };
  "/v1/swap/tokenList/from": {
    
    get: operations["SwapFromTokenList"];
  };
  "/v1/swap/quote": {
    
    post: operations["SwapQuote"];
  };
  "/v2/swap/quote": {
    
    post: operations["SwapQuoteV2"];
  };
  "/v1/swap/tokenList/to": {
    
    get: operations["SwapToTokenList"];
  };
  "/v1/tokenlist": {
    
    get: operations["GetTokenList"];
  };
  "/v1/tokenMarketData": {
    
    get: operations["GetTokenMarketData"];
  };
  "/v1/tokenMetadata": {
    
    get: operations["GetTokenMetadata"];
  };
  "/v1/transactions": {
    
    get: operations["GetTransactions"];
  };
  "/v1/transaction": {
    
    get: operations["GetTransactionStatus"];
  };
  "/v1/utxo": {
    
    get: operations["GetUtxo"];
  };
  "/version": {
    
    get: operations["GetVersion"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AddressAnalysisWarning: {
      
      severity: "CRITICAL" | "WARNING" | "INFO";
      message: string;
    };
    AddressAnalysisInfo: {
      
      prevSendCount?: number;
    };
    AnalyseAddressResult: {
      address: string;
      network: string;
      warnings: components["schemas"]["AddressAnalysisWarning"][];
      info: components["schemas"]["AddressAnalysisInfo"];
    };
    "Result_AnalyseAddressResult-Array_": {
      content: components["schemas"]["AnalyseAddressResult"][];
    };
    
    ErrorParams: {
      message?: string;
      [key: string]: string | undefined;
    };
    ErrorResult: {
      message: string;
      params?: components["schemas"]["ErrorParams"];
    };
    AnalyseUrlResult: {
      url: string;
      isMalicious: boolean | null;
    };
    Result_AnalyseUrlResult_: {
      content: components["schemas"]["AnalyseUrlResult"];
    };
    BlockChainExplorer: {
      url: string;
      name: string;
    };
    SocialLink: {
      url: string;
      name: string;
    };
    TokenReputation: {
      tokenLists: string[];
    } | {
      blacklists: string[];
    };
    TokenMetadata: {
      isSpam?: boolean;
      reputation?: components["schemas"]["TokenReputation"];
      tokenAddress?: string;
      links?: components["schemas"]["SocialLink"][];
      explorers?: components["schemas"]["BlockChainExplorer"][];
      description?: string;
      priceUSD?: string;
      logoUrl?: string;
      subLabels?: string[];
      label?: string;
      symbol?: string;
      
      decimals: number;
    };
    
    InternalBalance: {
      token: string;
      value: string;
      metadata?: components["schemas"]["TokenMetadata"];
    };
    "Result_InternalBalance-Array_": {
      content: components["schemas"]["InternalBalance"][];
    };
    
    "Record_string.InternalBalance-Array_": Record<string, never>;
    
    "Record_string.boolean_": Record<string, never>;
    "Result_Record_string.InternalBalance-Array_-or-Record_string.boolean__": {
      content: components["schemas"]["Record_string.InternalBalance-Array_"] | components["schemas"]["Record_string.boolean_"];
    };
    BroadcastReceipt: {
      transactionId: string;
    };
    Result_BroadcastReceipt_: {
      content: components["schemas"]["BroadcastReceipt"];
    };
    Asset: {
      name: string;
      assetCaip: string;
      assetId: string;
      symbol: string;
      assetAddress: string;
      networkName: string;
      networkCaip: string;
      
      decimals: number;
      balanceNative: string;
      
      balanceUsd: number;
    };
    Protocol: {
      name: string;
      product: string;
      version: string;
      protocolUrl?: string;
      protocolLogo: string;
      description?: string;
    };
    Apy: {
      
      base: number;
      
      rewards?: number;
      
      total: number;
    };
    Vault: {
      name: string;
      protocol: components["schemas"]["Protocol"];
      vaultAddress: string;
      vaultUrl?: string;
      networkName: string;
      networkCaip: string;
      
      tvlInUsd: number;
      apy: components["schemas"]["Apy"];
      
      projectedAnnualEarnings: number;
    };
    BestVaultResult: {
      requestedAddress: string;
      asset: components["schemas"]["Asset"];
      vault: components["schemas"]["Vault"];
    };
    Result_BestVaultResult_: {
      content: components["schemas"]["BestVaultResult"];
    };
    DepositOptionsResult: {
      requestedAddress: string;
      userBalances: {
          depositOptions: components["schemas"]["Vault"][];
          asset: components["schemas"]["Asset"];
        }[];
    };
    Result_DepositOptionsResult_: {
      content: components["schemas"]["DepositOptionsResult"];
    };
    
    "Record_string.string-Array_": Record<string, never>;
    DepositOptionsParams: {
      
      minimumBalanceThreshold?: number;
      
      minimumVaultTvl?: number;
      
      minApy?: number;
      
      maxVaultsPerAsset?: number;
      allowedAssets?: string[];
      disallowedAssets?: string[];
      allowedNetworks?: string[];
      disallowedNetworks?: string[];
      allowedProtocols?: string[];
      disallowedProtocols?: string[];
      allowedTargetUnderlyingTokenForAsset?: components["schemas"]["Record_string.string-Array_"];
    };
    DefiProtocol: {
      id: string;
      name: string;
      
      balanceUsd: number;
      logoUrl?: string;
    };
    DefiAsset: {
      assetId: string;
      address: string;
      network: string;
      symbol: string;
      
      decimals: number;
      balanceNative: string;
      
      balanceUsdValue: number;
      
      portion: number;
    };
    DefiPosition: {
      assets: components["schemas"]["DefiAsset"][];
      
      positionUsdValue: number;
      isDebt: boolean;
      category: string;
      
      apy?: number;
      
      tvl?: number;
      vaultAddress?: string;
      vaultNetwork: string;
    };
    ProtocolWithPositions: {
      protocol: components["schemas"]["DefiProtocol"];
      positions: components["schemas"]["DefiPosition"][];
    };
    PositionsResult: {
      positions: components["schemas"]["ProtocolWithPositions"][];
    };
    Result_PositionsResult_: {
      content: components["schemas"]["PositionsResult"];
    };
    TvlDetails: {
      tvlNative: string;
      tvlUsd: string;
      lockedNative: string;
      lockedUsd: string;
      liquidNative: string;
      liquidUsd: string;
    };
    Token: {
      name: string;
      assetAddress: string;
      assetCaip: string;
      symbol: string;
      
      decimals: number;
    };
    ApyDetails: {
      
      "1day": number;
      
      "7day": number;
      
      "30day": number;
    };
    APY: {
      base: components["schemas"]["ApyDetails"];
      rewards?: components["schemas"]["ApyDetails"];
      total: components["schemas"]["ApyDetails"];
    };
    Reward: {
      apy: components["schemas"]["ApyDetails"];
      
      assetPriceInUsd: number;
      asset: components["schemas"]["Token"];
    };
    Score: {
      
      vaultScore: number;
      
      vaultTvlScore: number;
      
      protocolTvlScore: number;
      
      holderScore: number;
      
      networkScore: number;
      
      assetScore: number;
    };
    TopHolder: {
      address: string;
      balance: string;
    };
    VaultInfoResult: {
      name: string;
      address: string;
      network: string;
      protocol: string;
      tvlDetails: components["schemas"]["TvlDetails"];
      
      numberOfHolders: number;
      lendLink: string;
      tags: string[];
      token: components["schemas"]["Token"];
      apy: components["schemas"]["APY"];
      description: string;
      rewards: components["schemas"]["Reward"][];
      isTransactional: boolean;
      score: components["schemas"]["Score"];
      
      assetPriceInUsd: number;
      topHolders: components["schemas"]["TopHolder"][];
      holdersTotalBalance: string;
    };
    Result_VaultInfoResult_: {
      content: components["schemas"]["VaultInfoResult"];
    };
    DataEntry: {
      
      timestamp: number;
      
      blockNumber: number;
      apy: components["schemas"]["Apy"];
      tvlDetails: components["schemas"]["TvlDetails"];
    };
    VaultHistoricalMetricsResult: {
      
      next_page?: number;
      data: components["schemas"]["DataEntry"][];
    };
    Result_VaultHistoricalMetricsResult_: {
      content: components["schemas"]["VaultHistoricalMetricsResult"];
    };
    Amount: {
      
      usd: number;
      native: string;
    };
    PositionValue: {
      
      usd: number;
      native: string;
    };
    VaultTransaction: {
      activity: string;
      
      timestamp: number;
      amount: components["schemas"]["Amount"];
      positionValue: components["schemas"]["PositionValue"];
    };
    VaultTransactionsResult: {
      transactions: components["schemas"]["VaultTransaction"][];
    };
    Result_VaultTransactionsResult_: {
      content: components["schemas"]["VaultTransactionsResult"];
    };
    
    "ExploreContentVariant.Text": "Text";
    
    ExploreTextContent: {
      id: string;
      
      isDynamicContent: false;
      title?: string;
      body?: string;
    };
    ExploreTextContentRow: {
      id: string;
      content: components["schemas"]["ExploreTextContent"][];
      hasDynamicContent: boolean;
      variant: components["schemas"]["ExploreContentVariant.Text"];
    };
    
    "ExploreContentVariant.Card": "Card";
    
    ExploreCardSize: "Large" | "Medium" | "Small";
    ExploreLinkExternal: {
      text: string;
      
      isInternal: false;
      url: string;
    };
    ExploreLinkInternal: {
      text: string;
      
      isInternal: true;
      slug: string;
    };
    ExploreLink: components["schemas"]["ExploreLinkExternal"] | components["schemas"]["ExploreLinkInternal"];
    ExploreCardContent: {
      id: string;
      
      isDynamicContent: false;
      title?: string;
      body?: string;
      size: components["schemas"]["ExploreCardSize"];
      background: string;
      floatingIcon?: string;
      buttonText?: string;
      buttonLink?: string;
      link?: components["schemas"]["ExploreLink"];
      info?: string;
    };
    ExploreCardContentRow: {
      id: string;
      content: components["schemas"]["ExploreCardContent"][];
      hasDynamicContent: boolean;
      variant: components["schemas"]["ExploreContentVariant.Card"];
      cardSize: components["schemas"]["ExploreCardSize"];
    };
    
    "ExploreContentVariant.List": "List";
    
    ExploreListIconVariant: "Square" | "RoudedCorners" | "Circle";
    ExploreListItemContent: {
      id: string;
      
      isDynamicContent: false;
      title?: string;
      body?: string;
      icon?: string;
      iconVariant?: components["schemas"]["ExploreListIconVariant"];
      buttonText?: string;
      buttonLink?: string;
      link?: components["schemas"]["ExploreLink"];
    };
    ExploreListContent: {
      id: string;
      
      isDynamicContent: false;
      title?: string;
      items: components["schemas"]["ExploreListItemContent"][];
      shuffleItems?: boolean;
    };
    ExploreListContentRow: {
      id: string;
      content: components["schemas"]["ExploreListContent"][];
      hasDynamicContent: boolean;
      variant: components["schemas"]["ExploreContentVariant.List"];
    };
    
    "ExploreContentVariant.Hero": "Hero";
    
    ExploreHeroVariant: "Card" | "FullBleed";
    ExploreHeroContent: {
      id: string;
      
      isDynamicContent: false;
      variant: components["schemas"]["ExploreHeroVariant"];
      title: string;
      body?: string;
      background: string;
      cta?: components["schemas"]["ExploreListItemContent"];
    };
    ExploreHeroContentRow: {
      id: string;
      content: components["schemas"]["ExploreHeroContent"][];
      hasDynamicContent: boolean;
      variant: components["schemas"]["ExploreContentVariant.Hero"];
      heroVariant: components["schemas"]["ExploreHeroVariant"];
    };
    
    ExploreContentRow: components["schemas"]["ExploreTextContentRow"] | components["schemas"]["ExploreCardContentRow"] | components["schemas"]["ExploreListContentRow"] | components["schemas"]["ExploreHeroContentRow"];
    "Result_ExploreContentRow-Array_": {
      content: components["schemas"]["ExploreContentRow"][];
    };
    Result_ExploreContentRow_: {
      content: components["schemas"]["ExploreContentRow"];
    };
    
    FeeOptionKind: "slow" | "medium" | "fast" | "default";
    DefaultFeeOption: {
      
      estimatedTimeBlocks?: number;
      token: string;
      amount: string;
      kind: components["schemas"]["FeeOptionKind"];
    };
    EVMFeeOption1559: {
      
      estimatedTimeBlocks?: number;
      
      is1559: true;
      kind: components["schemas"]["FeeOptionKind"];
      maxPriorityFeePerGas: string;
      maxFeePerGas: string;
    };
    EVMFeeOptionPre1559: {
      
      estimatedTimeBlocks?: number;
      
      is1559: false;
      kind: components["schemas"]["FeeOptionKind"];
      fee: string;
    };
    EVMFeeOption: components["schemas"]["EVMFeeOption1559"] | components["schemas"]["EVMFeeOptionPre1559"];
    SolanaFeeOption: {
      
      estimatedTimeBlocks?: number;
      kind: components["schemas"]["FeeOptionKind"];
      
      computeUnitPriceMicroLamports: number;
      
      computeUnitLimit: number;
    };
    FeeOption: components["schemas"]["DefaultFeeOption"] | components["schemas"]["EVMFeeOption"] | components["schemas"]["SolanaFeeOption"];
    "Result_FeeOption-Array_": {
      content: components["schemas"]["FeeOption"][];
    };
    KrakenConnectBalanceEx: {
      [key: string]: {
        hold_trade: string;
        balance: string;
      };
    };
    KrakenConnectWithdrawMethods: {
      fee: unknown;
      minimum: string;
      network: string;
      network_id: string;
      method: string;
      method_id: string;
      asset: string;
    };
    KrakenConnectWithdrawFee: {
      fee_token: string;
      net: string;
      total: string;
      fee: string;
      asset: string;
      asset_class: string;
    };
    KrakenConnectListFundingAddresses: {
      items: {
          address: {
            address: string;
            type: string;
          };
          network_id: string;
          id: string;
        }[];
      next_cursor: string | null;
    };
    KrakenConnectCreateFundingAddress: {
      verified: boolean;
      id: string;
    };
    KrakenConnectCreateFundingWithdrawal: {
      fee: {
        amount: string;
        asset: string;
        asset_class: string;
      };
      transaction_id: string;
    };
    KrakenConnectDeleteFundingAddress: boolean;
    KrakenConnectProxyResponse: {
      error: unknown[];
      result: components["schemas"]["KrakenConnectBalanceEx"] | components["schemas"]["KrakenConnectWithdrawMethods"] | components["schemas"]["KrakenConnectWithdrawFee"] | components["schemas"]["KrakenConnectListFundingAddresses"] | components["schemas"]["KrakenConnectCreateFundingAddress"] | components["schemas"]["KrakenConnectCreateFundingWithdrawal"] | components["schemas"]["KrakenConnectDeleteFundingAddress"];
    };
    KrakenConnectProxyRequestHeaders: {
      [key: string]: string;
    };
    KrakenConnectProxyRequest: {
      apiURI: string;
      
      method: "GET" | "POST";
      headers: components["schemas"]["KrakenConnectProxyRequestHeaders"];
      body?: string;
      params?: {
        [key: string]: unknown;
      };
      tokenId?: string;
    };
    
    NFT: {
      
      amount?: number;
      token: string;
    };
    "Result_NFT-Array_": {
      content: components["schemas"]["NFT"][];
    };
    ProtocolPositionToken: {
      address: string;
      network: string;
      symbol: string;
      
      decimals: number;
      
      price: number;
      tokens?: components["schemas"]["ProtocolPositionToken"][];
      
      balanceUsdValue?: number;
      
      balance?: number;
    };
    ProtocolTypedLabel: {
      label: string | number;
      
      type?: "dollar" | "pct";
    };
    ProtocolAncillaryStat: {
      label: string;
      value: string | number;
      
      type?: "string" | "number" | "dollar" | "pct" | "translation";
    };
    ProtocolPositionMetadata: {
      label?: string;
      subLabels?: components["schemas"]["ProtocolTypedLabel"][];
      imageUrls?: string[];
      pricePerShare?: number[];
      ancillaryStats?: components["schemas"]["ProtocolAncillaryStat"][];
    };
    ProtocolPosition: {
      
      type: "app-token" | "contract-position";
      network: string;
      address: string;
      category: string;
      usdValue: string | number;
      tokens: components["schemas"]["ProtocolPositionToken"][];
      metadata: components["schemas"]["ProtocolPositionMetadata"];
      
      supply?: number;
    };
    ProtocolProduct: {
      label: string;
      positions: components["schemas"]["ProtocolPosition"][];
      metadata: components["schemas"]["ProtocolAncillaryStat"][];
    };
    
    DeFiProtocol: {
      id: string;
      address: string;
      network: string;
      protocolId: string;
      protocolName: string;
      products: components["schemas"]["ProtocolProduct"][];
      
      protocolUsdBalance: number;
      protocolImageUrl?: string;
    };
    "Result_DeFiProtocol-Array_": {
      content: components["schemas"]["DeFiProtocol"][];
    };
    FiatRates: {
      [key: string]: string;
    };
    "Result__positions-DeFiProtocol-Array--fiatRates-FiatRates__": {
      content: {
        fiatRates: components["schemas"]["FiatRates"];
        positions: components["schemas"]["DeFiProtocol"][];
      };
    };
    Challenge: {
      d: string;
      
      expiry: number;
      
      ts: number;
      
      v: 1;
    };
    TokenPrice: {
      exchange?: string;
      provider: string;
      value: string;
      token: string;
    };
    "Result_TokenPrice-or-null_": {
      content: components["schemas"]["TokenPrice"] | null;
    };
    TokenPriceFiatValue: {
      source: string;
      changePercentage24HR?: string;
      value: string;
    };
    TokenPriceV2: {
      fiatValue: {
        [key: string]: components["schemas"]["TokenPriceFiatValue"];
      };
      assetId: string;
    };
    "Result_TokenPriceV2-or-null_": {
      content: components["schemas"]["TokenPriceV2"] | null;
    };
    PriceHistoryItem: {
      
      timestamp: number;
      
      value: number;
    };
    PriceHighLowHistoryItem: {
      
      high: number;
      
      low: number;
    };
    PriceHighLowHistory: {
      day?: components["schemas"]["PriceHighLowHistoryItem"];
      week?: components["schemas"]["PriceHighLowHistoryItem"];
      month?: components["schemas"]["PriceHighLowHistoryItem"];
      year?: components["schemas"]["PriceHighLowHistoryItem"];
      all?: components["schemas"]["PriceHighLowHistoryItem"];
    };
    PriceHistory: {
      prices: components["schemas"]["PriceHistoryItem"][];
      highLow: components["schemas"]["PriceHighLowHistory"];
    };
    "Result_PriceHistory-or-null_": {
      content: components["schemas"]["PriceHistory"] | null;
    };
    
    PriceHistoryGranularity: "DAY" | "WEEK" | "MONTH" | "YEAR" | "ALL";
    
    SupportedCurrency: "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "CHF" | "JPY";
    ResolvedAddressLabels: {
      name: string;
      type: string;
    } | null;
    "Result_ResolvedAddressLabels-Array_": {
      content: components["schemas"]["ResolvedAddressLabels"][];
    };
    ENSResolvedName: {
      
      expiresAt?: number;
      address?: string;
      registered: boolean;
      owner?: string;
      manager?: string | null;
      expired?: boolean;
      
      gracePeriodExpiresAt?: number;
      gracePeriodExpired?: boolean;
      contentHash?: string | null;
      email?: string | null;
      avatar?: string;
      url?: string;
    };
    ResolvedName: components["schemas"]["ENSResolvedName"];
    "Result_ResolvedName-or-null_": {
      content: components["schemas"]["ResolvedName"] | null;
    };
    RpcRequestResult: {
      
      jsonrpc: "2.0";
      
      id?: number;
    } & ({
      result: unknown;
    } | {
      error: {
        message?: string;
        
        code: number;
      };
    });
    Result_RpcRequestResult_: {
      content: components["schemas"]["RpcRequestResult"];
    };
    
    RPCErrorReason: "INSUFFICIENT_FUNDS";
    
    ReceiveAsset: {
      amount: string;
      assetId: string;
      sender: string;
      
      type: "receive";
    };
    
    SendAsset: {
      amount: string;
      assetId: string;
      recipient: string;
      
      type: "send";
    };
    
    MintAsset: {
      spentToken?: components["schemas"]["SendAsset"];
      amount?: string;
      assetId: string;
      
      type: "mint";
    };
    
    PurchaseAsset: {
      spentToken: components["schemas"]["SendAsset"];
      amount?: string;
      assetId: string;
      
      type: "purchase";
    };
    
    SoldAsset: {
      receivedToken?: components["schemas"]["ReceiveAsset"];
      amount?: string;
      assetId: string;
      
      type: "sale";
    };
    
    SwapAssets: {
      spent: components["schemas"]["SendAsset"];
      receive: components["schemas"]["ReceiveAsset"];
      
      type: "swap";
    };
    
    Deposit: {
      receivedToken?: components["schemas"]["ReceiveAsset"];
      depositedAmounts: {
          amount: string;
          assetId: string;
        }[];
      
      type: "deposit";
    };
    
    TokenApproval: {
      amount?: string;
      assetId: string;
      grantee: string;
      
      type: "token-approval";
    };
    TransactionEffect: components["schemas"]["ReceiveAsset"] | components["schemas"]["SendAsset"] | components["schemas"]["MintAsset"] | components["schemas"]["PurchaseAsset"] | components["schemas"]["SoldAsset"] | components["schemas"]["SwapAssets"] | components["schemas"]["Deposit"] | components["schemas"]["TokenApproval"];
    
    PreventativeAction: "BLOCK" | "WARN" | "NONE";
    SimulationWarning: {
      
      severity: "CRITICAL" | "WARNING";
      message: string;
    };
    EVMSimulationResult: {
      
      status: "success" | "failure";
      effects?: components["schemas"]["TransactionEffect"][];
      preventativeAction?: components["schemas"]["PreventativeAction"];
      warnings?: components["schemas"]["SimulationWarning"][];
      
      gasUsed: number;
      
      nonce: number;
      errorReason?: components["schemas"]["RPCErrorReason"];
    };
    SolanaSimulationResult: {
      
      status: "success" | "failure";
      effects?: components["schemas"]["TransactionEffect"][];
      preventativeAction?: components["schemas"]["PreventativeAction"];
      warnings?: components["schemas"]["SimulationWarning"][];
      fee: string;
      compiledTransaction: string;
    };
    ISimulationResult: {
      
      status: "success" | "failure";
      effects?: components["schemas"]["TransactionEffect"][];
      preventativeAction?: components["schemas"]["PreventativeAction"];
      warnings?: components["schemas"]["SimulationWarning"][];
    };
    SimulationResult: components["schemas"]["EVMSimulationResult"] | components["schemas"]["SolanaSimulationResult"] | components["schemas"]["ISimulationResult"];
    Result_SimulationResult_: {
      content: components["schemas"]["SimulationResult"];
    };
    SolanaSimulationInputCompiled: {
      dAppOrigin?: string;
      signatory?: string;
      transaction: string;
    };
    SerializedSolanaInstruction: {
      data: string;
      programId: string;
      keys: {
          isWritable: boolean;
          isSigner: boolean;
          pubkey: string;
        }[];
    };
    AddressLookupTableEntry: {
      address: string;
      serializedState: string;
    };
    SolanaSimulationInputPlain: {
      dAppOrigin?: string;
      signatory?: string;
      clientLookupTables?: components["schemas"]["AddressLookupTableEntry"][];
      atas?: {
          instruction: components["schemas"]["SerializedSolanaInstruction"];
          address: string;
        }[];
      feePayer: string;
      instructions: components["schemas"]["SerializedSolanaInstruction"][];
    };
    SolanaSimulationInput: components["schemas"]["SolanaSimulationInputCompiled"] | components["schemas"]["SolanaSimulationInputPlain"];
    
    EVMTransactionSimulationInput: {
      dAppOrigin?: string;
      
      type?: number;
      
      nonce?: number;
      maxPriorityFeePerGas?: string;
      maxFeePerGas?: string;
      gasPrice?: string;
      
      gasLimit?: number;
      value?: string;
      data?: string;
      chainId: string;
      from: string;
      to: string;
    };
    UnsignedTypedStructuredData: {
      message: {
        [key: string]: unknown;
      };
      domain: {
        [key: string]: unknown;
      };
      primaryType: string;
      types: {
        [key: string]: {
            type: string;
            name: string;
          }[];
      };
    };
    EVMMessageSimulationInput: {
      unsignedTypedData?: components["schemas"]["UnsignedTypedStructuredData"];
      unsignedPersonalSignMessage?: string;
      unsignedMessage?: string;
      dAppOrigin?: string;
      signatory: string;
    };
    EVMSimulationInput: components["schemas"]["EVMTransactionSimulationInput"] | components["schemas"]["EVMMessageSimulationInput"];
    SimulationInput: components["schemas"]["SolanaSimulationInput"] | components["schemas"]["EVMSimulationInput"];
    TokenType: {
      logoURI?: string;
      
      decimals?: number;
      symbol?: string;
      name?: string;
      address: string;
      chainId: string;
    };
    TokenDict: {
      [key: string]: components["schemas"]["TokenType"];
    };
    SwapFromTokenListResult: {
      fromTokens: {
        [key: string]: components["schemas"]["TokenDict"];
      };
    };
    Result_SwapFromTokenListResult_: {
      content: components["schemas"]["SwapFromTokenListResult"];
    };
    SwapQuoteAsset: {
      assetId: string;
      amount?: string;
    };
    SwapRouteProvider: {
      name: string;
      id: string;
      icon: string;
      
      type: "swap" | "bridge";
    };
    SwapRouteFee: {
      feeAsset: components["schemas"]["SwapQuoteAsset"];
      
      type: "gas" | "bridge";
    };
    SwapRouteTXStep: {
      fromAsset: components["schemas"]["SwapQuoteAsset"];
      toAsset: components["schemas"]["SwapQuoteAsset"];
      
      timeEstimate?: number;
      provider: components["schemas"]["SwapRouteProvider"];
      fees: components["schemas"]["SwapRouteFee"][];
    };
    SwapRoute: {
      txSteps: components["schemas"]["SwapRouteTXStep"][];
      
      timeEstimate: number;
      
      maximumTime: number;
    };
    SwapQuote: {
      from: components["schemas"]["SwapQuoteAsset"];
      to: components["schemas"]["SwapQuoteAsset"];
      route: components["schemas"]["SwapRoute"];
      minAmountOut: string;
      
      swapSlippage?: number;
      
      bridgeSlippage?: number;
    };
    SwapApprovalTxData: {
      data: string;
      toAddress: string;
      fromAddress: string;
    };
    SwapTxData: {
      data: string;
      value: string;
      txTarget: string;
      
      txType: "eth_sendTransaction" | "eth_signMessage";
    };
    SwapQuoteResult: {
      quote: components["schemas"]["SwapQuote"];
      approvalTxData?: components["schemas"]["SwapApprovalTxData"];
      swapTxData: components["schemas"]["SwapTxData"];
    };
    Result_SwapQuoteResult_: {
      content: components["schemas"]["SwapQuoteResult"];
    };
    
    SwapQuoteRouteType: "value" | "speed";
    SwapQuoteRequest: {
      from: {
        amount: string;
        assetId: string;
      };
      to: {
        assetId: string;
      };
      fromAddress: string;
      routeType: components["schemas"]["SwapQuoteRouteType"];
      
      maxSlippage?: number;
    };
    SwapEthereumTxData: {
      data: string;
      value: string;
      txTarget: string;
      
      txType: "eth_sendTransaction" | "eth_signMessage";
    };
    SwapSolanaTxData: {
      data: {
        latestBlockhash: {
          
          lastValidBlockHeight: number;
          blockhash: string;
        };
        signers: number[][];
        lookupTables: components["schemas"]["AddressLookupTableEntry"][];
        instructions: {
            data: number[];
            keys: {
                isWritable: boolean;
                isSigner: boolean;
                pubkey: string;
              }[];
            programId: string;
          }[];
      };
      value: string;
      
      txType: "solana";
    };
    SwapTxDataV2: components["schemas"]["SwapEthereumTxData"] | components["schemas"]["SwapSolanaTxData"];
    SwapQuoteResultV2: {
      quote: components["schemas"]["SwapQuote"];
      approvalTxData?: components["schemas"]["SwapApprovalTxData"];
      swapTxData: components["schemas"]["SwapTxDataV2"];
    };
    Result_SwapQuoteResultV2_: {
      content: components["schemas"]["SwapQuoteResultV2"];
    };
    SwapQuoteRequestV2: {
      from: {
        amount: string;
        assetId: string;
      };
      to: {
        assetId: string;
      };
      fromCaip10Account: string;
      toCaip10Account: string;
      routeType: components["schemas"]["SwapQuoteRouteType"];
      
      maxSlippage?: number;
    };
    SwapToTokenListResult: {
      fromNetwork: string;
      toTokens: {
        [key: string]: components["schemas"]["TokenDict"];
      };
    };
    Result_SwapToTokenListResult_: {
      content: components["schemas"]["SwapToTokenListResult"];
    };
    TokenCountType: {
      blacklists: {
        [key: string]: number;
      };
      whitelists: {
        [key: string]: number;
      };
    };
    AggregatedTokenListType: {
      lists: string[];
      logoURI?: string;
      
      decimals?: number;
      symbol?: string;
      name?: string;
      contract_address: string;
      
      chainId: number;
      caipId: string;
    };
    "Result__tokenCount-TokenCountType--whitelist-AggregatedTokenListType-Array--blacklist-AggregatedTokenListType-Array--__": {
      content: {
        blacklist: components["schemas"]["AggregatedTokenListType"][];
        whitelist: components["schemas"]["AggregatedTokenListType"][];
        tokenCount: components["schemas"]["TokenCountType"];
      };
    };
    PriceChangePercentage: {
      
      hour: number;
      
      day: number;
      
      week: number;
      
      month: number;
      
      year: number;
      
      all: number;
    };
    TokenMarketData: {
      
      allTimeHigh: number;
      
      allTimeLow: number;
      
      fullyDilutedValuation: number;
      
      marketCap: number;
      
      circulatingSupply: number;
      
      maxSupply: number;
      
      totalSupply: number;
      
      priceChange24HR: number;
      
      priceHigh24HR: number;
      
      priceLow24HR: number;
      
      volume24HR: number;
      priceChangePercentage: components["schemas"]["PriceChangePercentage"];
    };
    "Result_TokenMarketData-or-null_": {
      content: components["schemas"]["TokenMarketData"] | null;
    };
    NFTTrait: {
      value?: string | number | boolean;
      name: string;
    };
    NFTMetadata: {
      isSpam?: boolean;
      reputation?: components["schemas"]["TokenReputation"];
      backgroundColor?: string;
      traits?: components["schemas"]["NFTTrait"][];
      collection?: {
        imageUrl?: string;
        symbol?: string;
        name?: string;
        id: string;
      };
      
      signature?: string;
      contentType?: string;
      contentUrl?: string;
      description?: string;
      name?: string;
      
      isNFT: true;
    };
    TokenMetadataResponse: (components["schemas"]["TokenMetadata"] | components["schemas"]["NFTMetadata"]) | null;
    Result_TokenMetadataResponse_: {
      content: components["schemas"]["TokenMetadataResponse"];
    };
    
    TransactionCategory: "send" | "receive" | "token_receive" | "token_send" | "token_swap" | "nft_sale" | "nft_purchase" | "nft_send" | "nft_receive" | "airdrop" | "mint" | "deposit" | "withdraw" | "approve" | "revoke" | "contract_interaction";
    
    Transaction: {
      protocolInfo?: {
        possibleSpam?: boolean;
        category?: components["schemas"]["TransactionCategory"];
        projectId: string;
      };
      effects: components["schemas"]["TransactionEffect"][];
      metadata?: {
        actionName?: string;
        target?: string;
      };
      fee?: {
        amount: string;
        token: string;
      };
      
      kind: "sent" | "affected";
      
      status: "succeeded" | "failed";
      
      timestamp: number;
      id: string;
    };
    Page_Transaction_: {
      content: components["schemas"]["Transaction"][];
      cursor?: string;
    };
    TransactionStatusComplete: {
      
      blockNumber: number;
      
      status: "confirmed" | "failed";
    };
    TransactionStatusIncomplete: {
      
      status: "unknown" | "pending";
    };
    TransactionStatus: components["schemas"]["TransactionStatusComplete"] | components["schemas"]["TransactionStatusIncomplete"];
    NetworkState: {
      
      latestConfirmedBlock: number;
    };
    TransactionStatusPublic: components["schemas"]["TransactionStatus"] & {
      meta: {
        networkState: components["schemas"]["NetworkState"];
      };
    };
    Result_TransactionStatusPublic_: {
      content: components["schemas"]["TransactionStatusPublic"];
    };
    UTXO: {
      
      blockNumber?: number;
      script: string;
      value: string;
      
      index: number;
      transactionId: string;
    };
    "Result_UTXO-Array_": {
      content: components["schemas"]["UTXO"][];
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  
  AnalyseAddress: {
    
    requestBody: {
      content: {
        "application/json": {
          toAddress: string;
          fromAddress: string;
        };
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_AnalyseAddressResult-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  AnalyseUrl: {
    
    requestBody: {
      content: {
        "application/json": {
          caip10Accounts?: string[];
          url: string;
        };
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_AnalyseUrlResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetBalances: {
    parameters: {
      query: {
        
        address: string;
        
        network: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_InternalBalance-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetBalancesV2: {
    requestBody: {
      content: {
        "application/json": {
          backend?: string;
          hasBalance?: boolean;
          caip10Accounts: string[];
        };
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_Record_string.InternalBalance-Array_-or-Record_string.boolean__"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  Broadcast: {
    parameters: {
      query: {
        
        network: string;
        
        data: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_BroadcastReceipt_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTopOpportunity: {
    parameters: {
      query: {
        network: string;
      };
      path: {
        address: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_BestVaultResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetOppportunities: {
    parameters: {
      path: {
        address: string;
      };
    };
    
    requestBody: {
      content: {
        "application/json": components["schemas"]["DepositOptionsParams"];
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_DepositOptionsResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetAddressPositions: {
    parameters: {
      path: {
        address: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_PositionsResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetVaultInfo: {
    parameters: {
      path: {
        network: string;
        vaultAddress: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_VaultInfoResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetVaultHistoricalMetrics: {
    parameters: {
      query?: {
        fromTimestamp?: number;
        toTimestamp?: number;
        granularity?: number;
        perPage?: number;
      };
      path: {
        network: string;
        vaultAddress: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_VaultHistoricalMetricsResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetVaultTransactions: {
    parameters: {
      path: {
        network: string;
        vaultAddress: string;
        userAddress: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_VaultTransactionsResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetMainPageContent: {
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_ExploreContentRow-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetPageContentBySlug: {
    parameters: {
      path: {
        pageSlug: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_ExploreContentRow-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetContentById: {
    parameters: {
      query: {
        address: string;
        network: string;
      };
      path: {
        contentId: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_ExploreContentRow_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetFees: {
    parameters: {
      query: {
        
        network: string;
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_FeeOption-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  ProxyKrakenConnect: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["KrakenConnectProxyRequest"];
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["KrakenConnectProxyResponse"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetNfts: {
    parameters: {
      query: {
        
        address: string;
        
        network: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_NFT-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetPositions: {
    parameters: {
      query: {
        
        address: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_DeFiProtocol-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetPositionsV2: {
    parameters: {
      query: {
        
        address: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result__positions-DeFiProtocol-Array--fiatRates-FiatRates__"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetChallenge: {
    responses: {
      
      200: {
        content: {
          "application/json": {
            
            difficulty: number;
            target: string;
            signature: string;
            challenge: components["schemas"]["Challenge"];
          };
        };
      };
    };
  };
  
  SubmitSolution: {
    requestBody: {
      content: {
        "application/json": {
          signature: string;
          challenge: components["schemas"]["Challenge"];
          solution: string;
        };
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": {
            key: string;
          };
        };
      };
    };
  };
  
  GetPriceData: {
    parameters: {
      query: {
        
        token: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_TokenPrice-or-null_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetPriceDataV2: {
    parameters: {
      query: {
        
        token: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_TokenPriceV2-or-null_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetPriceHistoryData: {
    parameters: {
      query: {
        
        token: string;
        
        granularity: components["schemas"]["PriceHistoryGranularity"];
        
        currency?: components["schemas"]["SupportedCurrency"];
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_PriceHistory-or-null_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  ResolveEnsAddresses: {
    parameters: {
      query: {
        addresses: string[];
        network: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_ResolvedAddressLabels-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  ResolveEnsName: {
    parameters: {
      query: {
        name: string;
        network: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_ResolvedName-or-null_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  Rpc: {
    
    requestBody: {
      content: {
        "application/json": {
          network: string;
          request: unknown;
        };
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_RpcRequestResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  Simulate: {
    parameters: {
      query: {
        
        network: string;
      };
    };
    
    requestBody: {
      content: {
        "application/json": components["schemas"]["SimulationInput"];
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_SimulationResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  SwapFromTokenList: {
    parameters: {
      query: {
        fromNetworks: string[];
        isShortList?: boolean;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_SwapFromTokenListResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  SwapQuote: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SwapQuoteRequest"];
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_SwapQuoteResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  SwapQuoteV2: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SwapQuoteRequestV2"];
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_SwapQuoteResultV2_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  SwapToTokenList: {
    parameters: {
      query: {
        fromNetwork: string;
        isShortList?: boolean;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_SwapToTokenListResult_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTokenList: {
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result__tokenCount-TokenCountType--whitelist-AggregatedTokenListType-Array--blacklist-AggregatedTokenListType-Array--__"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTokenMarketData: {
    parameters: {
      query: {
        
        token: string;
        
        currency?: components["schemas"]["SupportedCurrency"];
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_TokenMarketData-or-null_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTokenMetadata: {
    parameters: {
      query: {
        
        token: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_TokenMetadataResponse_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTransactions: {
    parameters: {
      query: {
        
        address: string;
        
        network: string;
        
        cursor?: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Page_Transaction_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetTransactionStatus: {
    parameters: {
      query: {
        
        transactionId: string;
        
        network: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_TransactionStatusPublic_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetUtxo: {
    parameters: {
      query: {
        address: string;
        
        network: string;
        
        backend?: string;
      };
    };
    responses: {
      
      200: {
        content: {
          "application/json": components["schemas"]["Result_UTXO-Array_"];
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
  
  GetVersion: {
    responses: {
      
      200: {
        content: {
          "application/json": {
            version: string;
          };
        };
      };
      
      default: {
        content: {
          "application/json": components["schemas"]["ErrorResult"];
        };
      };
    };
  };
}
