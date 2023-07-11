import AboutPage from "./AboutPage/AboutPage";
import CarouselPage from "./CarouselPage/CarouselPage";
import FooterPage from "./FooterPage/FooterPage";
import HomPage from "./HomPage/HomPage";
import MenuPage from "./MenuPage/MenuPage";
import HeaderPage from "./headerPage/HeaderPage";

export default function index() {
  return (
    <div>
      <HeaderPage />
      <HomPage/>
      <MenuPage/>
      <CarouselPage/>
      <AboutPage/>
      <FooterPage/>
    </div>
  )
}
