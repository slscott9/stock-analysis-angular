export interface CryptoPrice {
    base: string,
    currency: string,
    amount: string
}


export interface Investment {
    initialPPS: number,
    tickerSymbol: string,
    userId: number,
    totalShares: number,
    totalInvestment: number,
    currentPrice: number //ui field
    priceDiff: number, //ui field
    transition: string, //ui field
    initialPPSInvalid: boolean;
    tickerSymbolInvalid: boolean;
    totalSharesInvalid: boolean;
}

export interface User {
    userId: number,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    selectedCurrency: string,
    cryptoInitialInvestment: number,
    stockInitialInvestment: number,
    totalProfit: number,
    token: string
}


//ui states
export interface AddState {
    isUpdate: boolean,
    showInvestBtn: boolean,
    showInputs: boolean
}

export interface ComponentState {
    showUserHome: boolean
    showCrypto: boolean,
    showStocks: boolean,
    showLogin: boolean,
    showRegister: boolean,
    cryptoUrl: string
    stockUrl: string

}

export interface InvestmentNotification {
    symbol: string,
    message: string,
    diff: number
}



//home state
export interface HomeState {
    showCryptoDetail: boolean,
    showStockDetail: boolean,
    showHome: boolean
}

//auth state
export interface AuthState {
    showLogin: boolean,
    showRegister: boolean,

}

export interface AddTransition {
    leftTransition: boolean;
}

export interface ComponentStateEvent {
    componentState: ComponentState,
    user: User
}

export const cryptoLogos: Map<string, string> = new Map(
    [
        ['LINK', "assets/images/crypto/link.png"],
        ['BTC', 'assets/images/crypto/btc.png'],
        ['ADA', 'assets/images/crypto/ada.png'],
        ['ETH', 'assets/images/crypto/eth.png'],
        ['SOL', 'assets/images/crypto/sol.png'],
    ]
)


export const stocksLogos: Map<string, string> = new Map(
    [
        ['QS', "assets/images/stocks/qs.png"],
        ['MP', 'assets/images/stocks/mp.png'],
        ['XPEV', 'assets/images/stocks/XPEV.png'],
        ['CHPT', 'assets/images/stocks/chpt.png'],
        ['SOL', 'assets/images/sol.png'],
    ]
)