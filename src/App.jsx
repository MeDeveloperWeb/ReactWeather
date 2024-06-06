import NavBar from './NavBar'
import Weather from './components/Weather'

function App() {

  return (
    <div className='flex flex-col body'>
      <NavBar />
      <main className="flex flex-col justify-center items-center flex-1">
        <Weather />
      </main>
    </div>
  )
}

export default App
