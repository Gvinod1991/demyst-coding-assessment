import { BalanceSheet } from './features/reports/pages/balanceSheet'
// We can extend this project by adding more pages with routing
// I am not adding the routes here since it is a single page app
function App() {
  return (
    <div className="root">
      <BalanceSheet />
    </div>
  )
}

export default App
