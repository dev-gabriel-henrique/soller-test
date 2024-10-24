import { useEffect, useState } from "react";

import phone from "../../assets/mobileApp.svg";
import ellipse from "../../assets/ellipseOut.svg";
import rectangle from "../../assets/yellowRectangle.svg";

import {
  FeaturesContainer,
  FeaturesDesc,
  PhoneFeaturesImage,
} from "./Features";
import { H2Container } from "../../components/H2Variants/H2";
import { SpanContainer } from "../../components/SpanVariants/Span";
import { TitleContainer } from "../Services/Services";

export function Features() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <FeaturesContainer id="configure">
      <TitleContainer>
        <div>
          <SpanContainer variant="orange">System features</SpanContainer>
          <H2Container variant="base">Powerful features</H2Container>
        </div>

        <p>
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </TitleContainer>

      <FeaturesDesc>
        <div>
          <h3>Erat sit</h3>
          <p>
            Id quis lectus pharetra, ultricies integer montes, amet, gravida
            consectetur. Nunc convallis fringilla nisl magna sagittis.
          </p>
        </div>

        <div>
          <h3>Ullamcorper arcu</h3>
          <p>
            Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
            auctor habitant duis dictum.
          </p>
        </div>

        <div>
          <h3>Imperdiet pellentesque</h3>
          <p>
            Mi vitae, massa eu molestie massa euismod volutpat condimentum.
            Blandit molestie ullamcorper hendrerit purus lorem vulputate.
          </p>
        </div>

        <div>
          <h3>Amet egestas</h3>
          <p>
            Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
            velit et, ullamcorper malesuada amet, felis.
          </p>
        </div>
      </FeaturesDesc>

      <PhoneFeaturesImage>
        <img id="phone" src={phone} alt="That image represents a smartphone" />

        <img id="ellipse" src={ellipse} />
      </PhoneFeaturesImage>

      <img id="yellowRectangle" src={rectangle} />
    </FeaturesContainer>
  ) : (
    <FeaturesContainer id="configure">
      <PhoneFeaturesImage>
        <img 
        id="phone"
        src={phone} 
        alt="That image represents a smartphone" />
        <img id="ellipse" src={ellipse} />
      </PhoneFeaturesImage>

      <img id="yellowRectangle" src={rectangle} />

      <div>
        <TitleContainer>
          <div>
            <SpanContainer variant="orange">System features</SpanContainer>
            <H2Container variant="base">Powerful features</H2Container>
          </div>

          <p>
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </TitleContainer>

        <FeaturesDesc>
          <div>
            <h3>Erat sit</h3>
            <p>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>

          <div>
            <h3>Ullamcorper arcu</h3>
            <p>
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </p>
          </div>

          <div>
            <h3>Imperdiet pellentesque</h3>
            <p>
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>

          <div>
            <h3>Amet egestas</h3>
            <p>
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </FeaturesDesc>
      </div>
    </FeaturesContainer>
  );
}
