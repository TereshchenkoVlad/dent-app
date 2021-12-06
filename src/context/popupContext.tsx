import React, { useContext, useState } from "react";

interface PopUpContextType {
  formVisible: boolean;
  popupVisible: boolean;
  onOpenForm: () => void;
  onCloseForm: () => void;
  onOpenPopup: () => void;
  onClosePopup: () => void;
}

const PopUpContext = React.createContext<PopUpContextType>({
  formVisible: false,
  popupVisible: false,
  onOpenForm: () => undefined,
  onCloseForm: () => undefined,
  onOpenPopup: () => undefined,
  onClosePopup: () => undefined,
});

export const PopUpContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [formVisible, setFormVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const onOpenForm = () => setFormVisible(true);
  const onCloseForm = () => setFormVisible(false);

  const onOpenPopup = () => setPopupVisible(true);
  const onClosePopup = () => setPopupVisible(false);

  return (
    <PopUpContext.Provider
      value={{
        formVisible,
        popupVisible,
        onOpenPopup,
        onClosePopup,
        onOpenForm,
        onCloseForm,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopUpContext = () => useContext(PopUpContext);
