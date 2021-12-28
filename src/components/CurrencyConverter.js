import { useState } from 'react'
import ExchangeRate from './ExchangeRate'

function CurrencyConverter() {
	const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
	const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
	const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
	const [amount, setAmount] = useState(1);

	const convert = () => {

	};

	console.log(amount);
	return (
		<div className="currency-converter">
			<h2>CurrencyConverter</h2>

			<div className="input-box">
				<table>
					<tbody>
						<tr>
							<td>Primacy Currency:</td>
							<td>
								<input type="number" name="currency-amount-1" value={amount} onChange={(e) => setAmount(e.target.value)} />
							</td>
							<td>
								<select name="currency-option-1" className="currency-option" value={chosenPrimaryCurrency} onChange={(e) => setChosenPrimaryCurrency(e.target.value)}>
									{currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
								</select>
							</td>
						</tr>
						<tr>
							<td>Secondary Currency:</td>
							<td>
								<input type="number" name="currency-amount-2" value={""} />
							</td>
							<td>
								<select name="currency-option-2" className="currency-option" value={chosenSecondaryCurrency} onChange={(e) => setChosenSecondaryCurrency(e.target.value)}>
									{currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
								</select>
							</td>
						</tr>
					</tbody>
				</table>

				<button id="convert-button" onClick={convert}>Convert</button>
			</div>
			<ExchangeRate />
		</div>
	);
}

export default CurrencyConverter;