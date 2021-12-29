function ExchangeRate({ exchangedData }) {

	return (
		<div className="exchange-rate">
			<h3>Exchange Rate</h3>
			<p className="exchange-rate-value">{exchangedData.exchangeRate}</p>
			<p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
		</div>
	);
}

export default ExchangeRate;