import React, { useContext, useState } from "react";

interface CounterContextType {
  counter: number;
  addCount: () => void;
}

const CounterContext = React.createContext<CounterContextType>({
  counter: 0,
  addCount: () => undefined,
});

export const CounterContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [counter, setCount] = useState(0);

  const addCount = () => setCount(counter + 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        addCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
