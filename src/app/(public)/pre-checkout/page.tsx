import { getSubscriptionPlan } from "./checkoutActions";

export default async function PreCheckout({
	searchParams,
}: {
	searchParams: Promise<{ plan: string }>;
}) {
	const { plan } = await searchParams;
	console.log(plan);
	const data = await getSubscriptionPlan(plan.trim().toLowerCase());
	return (
		<div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1>PreCheckout</h1>
			<div>
				<h2>Plan Details</h2>
				{data ? (
					<>
						<p>plan name = {data.name}</p>
						<p>plan price: {data.price}</p>
					</>
				) : (
					<p>Loading plan details...</p>
				)}
				<p>subcription details</p>
			</div>
		</div>
	);
}
