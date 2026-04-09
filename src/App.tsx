import { useEffect, useState } from 'react'
import './App.css'
import { fetchJSON } from './services/twelveDataService';
import type { ParamsType } from './types/types';
import SymbolForm from './components/SymbolForm';

export default function App() {
  const [symbol, setSymbol] = useState<string>("");

  useEffect(() => {
    if (!symbol) return;

    const fetchMarketValue = async () => {
      const params: ParamsType = {
        symbol: symbol,
        interval: "1min",
      };

      try {
        const marketData = await fetchJSON(params);
        console.log("Market Data:", marketData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMarketValue();
  }, [symbol]);


  return (
    <>
      <SymbolForm setSymbol={setSymbol} />
    </>
  )
}

