import './App.css'
import Header from './components/Header';
import ListaBebidas from './components/ListaBebidas'
import { dataVinhos, dataVodkas } from './data/data'

const data = {
  bebidas: [...dataVinhos, ...dataVodkas],
  vinho: dataVinhos,
  vodka: dataVodkas
};

function App() {
  return (
    <div className='div-container'> 
      <Header />     
      <ListaBebidas data={data} />
    </div>
  )
}

export default App
