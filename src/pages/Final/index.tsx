import { useEffect, useState } from "react";

import { ButtonPrimary } from "../../components/Button";
import { H2Container } from "../../components/H2Variants/H2";
import { SpanContainer } from "../../components/SpanVariants/Span";
import { TitleContainer } from "../Services/Services";
import { ButtonContainer, FinalContainer } from "./Final";

import Macbook from "../../assets/Macbook.svg";
import Ellipse from "../../assets/purpleLightEllipse.svg";
import MiniEllipse from "../../assets/mini-ellipse.svg";

export function Final() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <FinalContainer>
      <div>
      <TitleContainer>
        <div>
          <SpanContainer variant="yellowLight">
            Get the Sun to power your home
          </SpanContainer>

          <H2Container variant="white">
            All the power that you need for your house is now available
          </H2Container>
        </div>
      </TitleContainer>

      <ButtonContainer>
        <ButtonPrimary />

        <p>Egestas fringilla aliquam leo</p>
      </ButtonContainer>
      </div>

      <img id="macbook" src={Macbook} alt="That image represents a Macbook" />

      <img id={isMobile ? "miniEllipse" : "lightEllipse"} src={isMobile ? MiniEllipse : Ellipse} />
    </FinalContainer>
  );
}
