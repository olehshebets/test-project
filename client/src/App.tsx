import axios from "axios"
import { useEffect, useState } from "react"
import "./App.css"

export interface Payout {
	name: string
	amount: number
	oweTravellerId: number;
}

const api = axios.create({
	baseURL: "http://localhost:3333/",
})

function App() {
	const currentTravellerId = 1;
	const oweTravellerId = 2;

	const [payouts, setPayouts] = useState<Payout[]>([])
	const [createPayoutName, setCreatePayoutName] = useState("");
	const [createPayoutAmount, setCreatePayoutAmount] = useState(0);
	
	function updatePayouts() {
		api.get(`travellers/${currentTravellerId}/payouts`).then(({ data }) => {
			setPayouts(data);
		})
	}

	async function addPayoutToTraveller(travellerId: number, payoutData: Payout) {
		const result = await api.post(`/travellers/${travellerId}/payouts`, payoutData);

		if (result.status === 201) {
			setPayouts([...payouts, result.data]);
		}

		setCreatePayoutName("")
		setCreatePayoutAmount(0)
	}

	async function getAllOweAmount(travellerId: number) {
		const result = await api.get(`/travellers/${travellerId}/calc-owe-payouts`);

		if (result.status === 200 && result.data.length) {
			alert(result.data.map((item: any) => `${item.traveller.firstName} owes ${item.amount} pounds`).join(", and "));
		}
	}
		
	useEffect(() => {
		updatePayouts();
	}, []);

	return (
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>Expense</th>
				</tr>
				{payouts.map(payout => (
					<tr>
						<th>{payout.name}</th>
						<th>{`${payout.amount} $`}</th>
					</tr>
				))}
			</table>
			
			<input type="text" value={createPayoutName} onChange={(event) => setCreatePayoutName(event.target.value)} />
			<input type="number" value={createPayoutAmount} onChange={(event) => setCreatePayoutAmount(+event.target.value)} />
			<button onClick={() => addPayoutToTraveller(currentTravellerId, { name: createPayoutName, amount: createPayoutAmount, oweTravellerId })}>Add expense</button>
      <br />
			<button onClick={() => getAllOweAmount(currentTravellerId)}>SettleUp</button>
		</div>
	)
}

export default App;
