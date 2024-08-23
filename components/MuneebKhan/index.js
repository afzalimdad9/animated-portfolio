import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import A from "./muneebkhanSVGs/A";
import B from "./muneebkhanSVGs/B";
import E1 from "./muneebkhanSVGs/E1";
import E2 from "./muneebkhanSVGs/E2";
import H from "./muneebkhanSVGs/H";
import K1 from "./muneebkhanSVGs/K1";
import K2 from "./muneebkhanSVGs/K2";
import K3 from "./muneebkhanSVGs/K3";
import M from "./muneebkhanSVGs/M";
import N from "./muneebkhanSVGs/N";
import N2 from "./muneebkhanSVGs/N2";
import U from "./muneebkhanSVGs/U";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`mk-muneeb-khan-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function MuneebKhan({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight/2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`mk-muneeb-khan ${mount ? 'mk-muneeb-khan-visible' : ''}`}>
      <SvgWrapper
        className="mk_svg_M"
        SVG={M}
      />
      <SvgWrapper
        className="mk_svg_U"
        SVG={U}
      />
      <SvgWrapper
        className="mk_svg_N"
        SVG={N}
      />
      <SvgWrapper
        className="mk_svg_E1"
        SVG={E1}
      />
      <SvgWrapper
        className="mk_svg_E2"
        SVG={E2}
      />
      <SvgWrapper
        className="mk_svg_B"
        SVG={B}
      />
      <SvgWrapper
        className="mk_svg_K1"
        SVG={K1}
      />
      <SvgWrapper
        className="mk_svg_K2"
        SVG={K2}
      />
      <SvgWrapper
        className="mk_svg_K3"
        SVG={K3}
      />
      <SvgWrapper
        className="mk_svg_H"
        SVG={H}
      />
      <SvgWrapper
        className="mk_svg_A"
        SVG={A}
      />
      <SvgWrapper
        className="mk_svg_N2"
        SVG={N2}
      />
    </div>
  )
}
