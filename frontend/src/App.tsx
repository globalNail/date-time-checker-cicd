import { DateTimeChecker } from './components/DateTimeChecker'
import { useClock } from './hooks/useClock'

function App() {
  const currentTime = useClock()

  return <DateTimeChecker currentTime={currentTime} />
}

export default App
