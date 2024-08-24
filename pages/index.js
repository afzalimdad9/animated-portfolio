import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../views/Contact";
import FullPageScroll from "../components/FullPageScroll";
import Header from "../components/Header";
import MapsContribution from "../views/MapsContribution";
import MySelf from "../views/MySelf";
import Outer from "../views/Outer";
import Projects from "../views/Projects";
import Reviews from "../views/Reviews";
import SideElements from "../components/SideElements";
import TopScrolledBar from "../components/TopScrolledBar";
import Works from "../views/Works";
import { contact, graphics, header, mapsContribution, mySelf, outer, projects, reviews, works } from "../utils";
import sideElements from "../utils/sideElements";
import Cursor from "../components/Cursor";
import PreLoader from "../components/PreLoader";
import Certifications from "../views/Certifications";
import certifications from "../utils/certifications";
import WaterMark from "../components/WaterMark";

const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">{children}</div>
)

export default function Home() {
  return (
    <>
      <PreLoader />

      <Cursor />
      <ParallaxProvider>

        <TopScrolledBar />

        <FullPageScroll />

        <Header data={header} />

        <SideElements data={sideElements} />

        <ViewElement id="home">
          <Outer data={outer} />
        </ViewElement>

        <ViewElement id="my-self">
          <MySelf data={mySelf} />
        </ViewElement>

        <ViewElement id="experience">
          <Works data={works} />
        </ViewElement>

        <ViewElement id="my-work">
          <Projects data={projects} />
        </ViewElement>

        <ViewElement id="reviews">
          <Reviews data={reviews} />
        </ViewElement>

        <ViewElement id="certifications">
          <Certifications data={certifications} />
        </ViewElement>

        {/* <ViewElement id="graphics">
          <Graphics data={graphics} />
        </ViewElement> */}

        {/* <ViewElement id="contributions">
          <MapsContribution data={mapsContribution} />
        </ViewElement> */}

        <ViewElement id="contact">
          <Contact data={contact} />
        </ViewElement>

        <WaterMark />
      </ParallaxProvider>
    </>
  )
}
