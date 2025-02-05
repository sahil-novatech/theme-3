import dynamic from 'next/dynamic'


const EarningsChart1 = dynamic(() => import('./EarningsChart1'), { ssr: false })
const EarningsChart3 = dynamic(() => import('./EarningsChart3'), { ssr: false })

export default function ChartList({ style }) {
    return (
        <>
            {style === 1 && <EarningsChart1 />}
            {style === 2 && <EarningsChart3 />}
        </>
    )
}