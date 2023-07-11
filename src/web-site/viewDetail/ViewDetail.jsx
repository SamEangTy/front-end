import HeaderPage from "../headerPage/HeaderPage";
import ViewLists from "../ViewLists/ViewLists";
import FooterPage from "../FooterPage/FooterPage";
import "./ViewDetail.scss";
import { useEffect, useState } from "react";

export default function ViewDetail() {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData !== null ? JSON.parse(localData) : [0];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  function click() {
    setCart((prev) => ++prev);
  }

  return (
    <div className="viewdetail">
      <HeaderPage cart={cart} />
      <ViewLists fun={click} />
      <FooterPage />
    </div>
  );
}
