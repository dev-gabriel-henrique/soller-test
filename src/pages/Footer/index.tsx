import { FooterContainer } from "./Footer";

import logoExpanded from "../../assets/Logo-Container.svg"

export function Footer() {
  return (
    <FooterContainer>
      <div>
      <img src={logoExpanded} alt="That is a logo expanded of Soller" />

      <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>

      <ul>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </FooterContainer>
  )
}