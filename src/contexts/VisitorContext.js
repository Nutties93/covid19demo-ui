/* Orange Copyright restricted MVP */
import React, { createContext, useState } from 'react';

export const VisitorContext = createContext();

export function VisitorProvider(props) {
  const [visitor, setVisitor] = useState({"visitorName":"", "temperature": "", "trackerId": "", "host": ""});

  const handleSubmit = () =>{
    setVisitor({"visitorName":"", "temperature": "", "trackerId": "", "host": ""})
  }

  const resetVisitorForm= () =>{
    setVisitor({"visitorName":"", "temperature": "", "trackerId": "", "host": ""})
  }

  const handleChange= (evt) =>{
    setVisitor({ ...visitor, [evt.target.name]: evt.target.value})
  }

  const handleClickButton= (evt,temperature) =>{
    setVisitor({ [evt.currentTarget.name]: evt.currentTarget.value, "temperature": temperature, "trackerId": "", "host": ""})
  }

  return (
    <VisitorContext.Provider value={{visitor, handleSubmit,resetVisitorForm,handleChange,handleClickButton }}>
      {props.children}
    </VisitorContext.Provider>
  );
}

