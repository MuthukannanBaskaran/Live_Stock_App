export type ParamsType = {
    symbol: string;
    interval: string;
}

export type MarketDataType = {
    close: string;
    datetime: string;
    high: string;
    low: string;
    open: string;
    volume: string;
}

export type MetaDataType = {
    currency: string;
    exchange: string;
    exchange_timezone: string;
    interval: string;
    mic_code: string;
    symbol: string;
    type: string;
}