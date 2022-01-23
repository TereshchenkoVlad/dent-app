import React, { useContext, useState } from "react";

interface PopUpContextType {
  formVisible: boolean;
  popupVisible: boolean;
  popupWeekend: boolean;
  onOpenForm: () => void;
  onCloseForm: () => void;
  onOpenPopup: () => void;
  onClosePopup: () => void;
  onOpenWeekenPopup: () => void;
  onCloseWeekendPopup: () => void;
}

const PopUpContext = React.createContext<PopUpContextType>({
  formVisible: false,
  popupVisible: false,
  popupWeekend: true,
  onOpenForm: () => undefined,
  onCloseForm: () => undefined,
  onOpenPopup: () => undefined,
  onClosePopup: () => undefined,
  onOpenWeekenPopup: () => undefined,
  onCloseWeekendPopup: () => undefined,
});

export const PopUpContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [formVisible, setFormVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupWeekend, setPopupWeekend] = useState(true);

  const onOpenForm = () => setFormVisible(true);
  const onCloseForm = () => setFormVisible(false);

  const onOpenPopup = () => setPopupVisible(true);
  const onClosePopup = () => setPopupVisible(false);

  const onOpenWeekenPopup = () => setPopupWeekend(true);
  const onCloseWeekendPopup = () => setPopupWeekend(false);

  return (
    <PopUpContext.Provider
      value={{
        formVisible,
        popupVisible,
        popupWeekend,
        onOpenPopup,
        onClosePopup,
        onOpenForm,
        onCloseForm,
        onOpenWeekenPopup,
        onCloseWeekendPopup,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopUpContext = () => useContext(PopUpContext);
