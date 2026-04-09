import { useEffect, useState } from 'react'
import './App.css'
import { fetchJSON } from './services/twelveDataService';
import type { ParamsType, MarketDataType, MetaDataType } from './types/types';
import SymbolForm from './components/SymbolForm';
import MarketDataForm from './components/MarketDataForm';

export default function App() {
  const [symbol, setSymbol] = useState<string>("");
  const [marketData, setMarketData] = useState<MarketDataType[] | null>(null);
  const [metaData, setMetaData] = useState<MetaDataType | null>(null);

  useEffect(() => {
    if (!symbol) return;

    const fetchMarketValue = async () => {
      const params: ParamsType = {
        symbol: symbol,
        interval: "1min",
      };

      try {
        const data = await fetchJSON(params);
        // console.log("Market Data:", data);
        // console.log("Market Value:", data.values, "\ndata.values[0]:", data.values[0]);
        setMarketData(data.values);
        setMetaData(data.meta);
        // console.log("Market Data State:", marketData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMarketValue();
  }, [symbol]);


  return (
    <>
      <SymbolForm setSymbol={setSymbol} />
      <MarketDataForm marketData={marketData} metaData={metaData} />
    </>
  )
}

