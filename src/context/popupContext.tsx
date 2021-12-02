import React, { useContext, useState } from "react";

interface PopUpContextType {
  visible: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const PopUpContext = React.createContext<PopUpContextType>({
  visible: false,
  onOpen: () => undefined,
  onClose: () => undefined,
});

export const PopUpContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [visible, setVisible] = useState(false);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <PopUpContext.Provider value={{ visible, onOpen, onClose }}>
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopUpContext = () => useContext(PopUpContext);
