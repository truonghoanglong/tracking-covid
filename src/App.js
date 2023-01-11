import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './apis';
import ContrySelector from './components/ContrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {

  const [countries,setCountries] = useState([])
  const [seletedCountrID, setSeletedCountrID] = useState('')

  useEffect(()=>{
    getCountries()
      .then(res => {
        setCountries(res.data);
      } )
  },[])

  const handleOnchange = (e) => {
    console.log({e});
    setSeletedCountrID(e.target.value)
  }

  useEffect(()=>{
    const { Slug } = countries.find(
      country => country.ISO2.toLowerCase() === seletedCountrID
    );

    getReportByCountry(Slug).then((res)=>{
      console.log('getREPORT',{res});
    })
  },[countries,seletedCountrID])

  return (
    <>
      <ContrySelector countries={countries} handleOnchange={handleOnchange}/> 
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
