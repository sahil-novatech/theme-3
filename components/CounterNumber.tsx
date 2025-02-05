import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('./CounterUp'), {
	ssr: false,
})

// interface CounterUpProps {
//   count?: number; // Single prop for count
// }

export default function CounterNumber() {
	return (
		<>
			<CounterUp count={686} time={1} />
		</>
	)
}