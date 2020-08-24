/* Orange Copyright restricted MVP */
import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export function LocationProvider(props) {
  const [siteid, setLocation] = useState("1");
  const changeLocation = e => setLocation(e.target.value);

  return (
    <LocationContext.Provider value={{siteid, changeLocation}}>
      {props.children}
    </LocationContext.Provider>
  );
}

