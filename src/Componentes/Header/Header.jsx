import React,{useState,useEffect} from 'react'
import { HeaderWrapper } from './HeaderCSS'

export default function Header() {

  const [dateState, setDateState] = useState(new Date().toLocaleString("es-ES" ,
	{day: "2-digit", month: "short", year: "numeric"}))
  
  useEffect(() => {
    
    const timer = setInterval(()=>{
      setDateState(new Date().toLocaleString("es-ES" ,
      {day: "2-digit", month: "short", year: "numeric"}))
    },60000)

    
  }, [])
  

  return (
    <HeaderWrapper>
      {dateState}
    </HeaderWrapper>
  )
}
