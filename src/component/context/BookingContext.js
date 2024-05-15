import { createContext, useState } from "react";

export const BookingContext = createContext({});

export const BookProvide = ({ children }) => {
  const data = JSON.parse(sessionStorage.getItem("selectBooking"));
  const [bookData, SetBookData] = useState(data);
  sessionStorage.setItem("selectBooking", JSON.stringify(bookData));
  return <BookingContext.Provider value={{ bookData, SetBookData }}>{children}</BookingContext.Provider>;
};
