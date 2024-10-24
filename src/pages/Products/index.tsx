import { useEffect, useState } from "react";

import { ProductsContainer } from "./Products";
import { H2Container } from "../../components/H2Variants/H2";
import { SpanContainer } from "../../components/SpanVariants/Span";

import mobile from "../../assets/mobile.svg"
import desktop from "../../assets/desktop.svg"
import yellowEllipse from "../../assets/yellowEllipse.svg"
import purpleEllipse from "../../assets/purpleEllipse.svg"

export function Products() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ProductsContainer id="products">
      <div>
      <SpanContainer variant="orange">No more waste</SpanContainer>
      <H2Container variant="base">Pick the Sun</H2Container>
      </div>

      <p>
      Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
      </p>

      {isMobile ? (
        <img src={mobile} alt="That image represents a desktop site" />
      ) : (
        <img id="desktop" src={desktop} alt="That image represents a desktop site" />
      )}

      <img id="yellowE" src={yellowEllipse} />
      <img id="purpleE" src={purpleEllipse} />
    </ProductsContainer>
  );
}
