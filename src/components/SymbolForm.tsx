

export default function SymbolForm({ setSymbol }: { setSymbol: (symbol: string) => void }) {

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const stockSymbol = formData.get("stock-symbol") as string;
        setSymbol(stockSymbol);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="market-input">
                    <label htmlFor="stock-symbol">Stock Symbol</label>
                    <input id="stock-symbol" name="stock-symbol" type="text" placeholder="Enter stock symbol" />
                </div>
                <button type='submit' className='button-get'>Get Market Value</button>
            </form>
        </div>
    )
}