import { useState, useEffect } from "react";

import worker from "../../assets/worker.svg"
import logotyped from "../../assets/logo-typed.png"

import { Headphones } from "@phosphor-icons/react";
import { ButtonSecondary } from "../../components/Button";
import { HeaderContact, HeaderContainer, HeaderNavigation } from "./Header";

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <HeaderContainer>
      <a href="#">
        <img src={logotyped} alt="Logo solles" />
      </a>

      <img 
      id="worker"
      src={worker} 
      alt="Worker installing a solar panel" 
      />
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <HeaderNavigation>
        <a href="#">
          <img src={logotyped} alt="Logo solles" />
        </a>

        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#soluctions">Solutions</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#configure">Configure</a>
          </li>
        </ul>
      </HeaderNavigation>

      <HeaderContact>
        <a href="#">
          <Headphones weight="regular" size={20} />
          <p>555 818 282</p>
        </a>

        <ButtonSecondary />
      </HeaderContact>

      <img
      id="worker" 
      src={worker} 
      alt="Worker installing a solar panel" 
      />
    </HeaderContainer>
  );
}
