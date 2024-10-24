import { Info, InitialContainer } from "./Initial";
import { Feedback } from "../../components/Feedback";
import { ButtonSecondary } from "../../components/Button";

import userRwanda from "../../assets/userRwanda.png"

export function Initial() {
  return (
    <InitialContainer>
      <Info>
      <h1>Get the Sun to Power Your Home</h1>
      <p>
        Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci
        dui consequat turpis scelerisque.
      </p>
      <ButtonSecondary />

      <Feedback 
        text='“Viverra viverra nibh enim et aliquam, enim. 
        Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”'
        userImg={userRwanda}
        userLink="zerowaste.com"
        username="Rwanda Melflor"
        />
      </Info>
    </InitialContainer>
  );
}
