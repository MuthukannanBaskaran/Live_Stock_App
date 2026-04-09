import type { MarketDataType, MetaDataType } from '../types/types';

export default function MarketDataForm({ marketData, metaData }: { marketData: MarketDataType[] | null; metaData: MetaDataType | null }) {
    return (
        <>
            {marketData ? (
                <>
                    {metaData && (
                        <div className='div-meta-data'>
                            Results of {metaData.type} <span>{metaData.symbol}-{metaData.exchange}</span>
                        </div>
                    )}
                    <div className='div-market-data-container'>
                        {marketData.map((data, index) => (
                            <div key={index} className='div-market-data'>
                                <div className='div-data'>Close: {Number(data.close || 0).toFixed(2)}</div>
                                <div className='div-data div-datetime'>Datetime: {data.datetime}</div>
                                <div className='div-data'>High: {Number(data.high || 0).toFixed(2)}</div>
                                <div className='div-data'>Low: {Number(data.low || 0).toFixed(2)}</div>
                                <div className='div-data'>Open: {Number(data.open || 0).toFixed(2)}</div>
                                <div className='div-data'>Volume: {Number(data.volume || 0).toFixed(0)}</div>
                            </div>
                        ))}
                    </div>
                    <p className='p-disclaimer'>
                        *Note: The market data is updated every minute, so the displayed values may not reflect real-time changes. Please refresh the page to get the latest market data.
                    </p>
                </>
            ) : (
                <p>No market data available.</p>
            )}
        </>
    );
}