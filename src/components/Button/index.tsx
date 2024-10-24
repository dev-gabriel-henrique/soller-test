import { ArrowRight } from "@phosphor-icons/react";
import { ButtonContainer } from "./Button";

export function ButtonPrimary() {
  return (
    <ButtonContainer variant="primary">
      Request a Quote
      <ArrowRight weight="bold" size={24} />
    </ButtonContainer>
  );
}

export function ButtonSecondary() {
  return (
    <ButtonContainer variant="secondary">
      Request a Quote
      <ArrowRight weight="bold" size={24} />
    </ButtonContainer>
  );
}
