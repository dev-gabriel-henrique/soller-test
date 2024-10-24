import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { ActionButton } from "./Arrows";

interface ArrowProps {
  next?: () => void;
  previous?: () => void;
}

export function NextArrow({next}: ArrowProps) {
  return (
    <ActionButton onClick={next}>
      <ArrowRight size={24} weight="bold" />
    </ActionButton>
  )
}

export function PreviousArrow({previous}: ArrowProps) {
  return (
    <ActionButton onClick={previous}>
      <ArrowLeft size={24} weight="bold" />
    </ActionButton>
  )
}