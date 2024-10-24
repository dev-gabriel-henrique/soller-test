import { H2Container } from "../../components/H2Variants/H2";
import { SpanContainer } from "../../components/SpanVariants/Span";
import {
  BenefitsContainer,
  PhoneImage,
  ServicesContainer,
  TitleContainer,
} from "./Services";

import phone from "../../assets/Phone.svg";
import frame from "../../assets/frame.svg";
import rectangle from "../../assets/rectangle.svg";
import { useEffect, useState } from "react";

export function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? (
    <ServicesContainer id="services">
      <TitleContainer>
        <div>
          <SpanContainer variant="orange">Services</SpanContainer>
          <H2Container variant="base">Personalized services</H2Container>
        </div>

        <p>
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </TitleContainer>

      <BenefitsContainer>
        <div>
          <h3>Et mauris</h3>
          <p>
            Posuere quis sed mauris non curabitur pretium elementum eget.
            Feugiat sed maecenas eu accumsan tristique.
          </p>
        </div>

        <div>
          <h3>Eget sit</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div>
          <h3>Imperdiet pellentesque</h3>
          <p>
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
            viverra parturient tristique nulla.
          </p>
        </div>

        <div>
          <h3>Non libero</h3>
          <p>
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
            ut sed eros, consectetur viverra.
          </p>
        </div>
      </BenefitsContainer>

      <PhoneImage>
        <img id="phone" src={phone} alt="That image represents a smartphone" />

        <img id="frame" src={frame} />
      </PhoneImage>

      <img id="purpleRectangle" src={rectangle} />
    </ServicesContainer>
  ) : (
    <ServicesContainer id="services">
      <img id="purpleRectangle" src={rectangle} />
      <PhoneImage>
        <img src={phone} alt="That image represents a smartphone" />
        <img id="frame" src={frame} />
      </PhoneImage>
      
      <div>
      <TitleContainer>
        <div>
          <SpanContainer variant="orange">Services</SpanContainer>
          <H2Container variant="base">Personalized services</H2Container>
        </div>

        <p>
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </TitleContainer>

      <BenefitsContainer>
        <div>
          <h3>Et mauris</h3>
          <p>
            Posuere quis sed mauris non curabitur pretium elementum eget.
            Feugiat sed maecenas eu accumsan tristique.
          </p>
        </div>

        <div>
          <h3>Eget sit</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div>
          <h3>Imperdiet pellentesque</h3>
          <p>
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
            viverra parturient tristique nulla.
          </p>
        </div>

        <div>
          <h3>Non libero</h3>
          <p>
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
            ut sed eros, consectetur viverra.
          </p>
        </div>
      </BenefitsContainer>
      </div>
    </ServicesContainer>
  );
}
