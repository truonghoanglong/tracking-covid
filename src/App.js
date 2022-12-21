import { useEffect, useState } from 'react';
import { getCountries } from './apis';
import ContrySelector from './components/ContrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {

  const [countries,setCountries] = useState([])

  useEffect(()=>{
    getCountries()
      .then(res => {
        setCountries(res.data);
      } )
  },[])
  return (
    <>
      <ContrySelector countries={countries}/> 
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
