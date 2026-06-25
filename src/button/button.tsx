import { Button as DSButton, type ButtonProps as DSButtonProps } from "@digdir/designsystemet-react";
import { forwardRef } from "react";

export type ButtonProps = DSButtonProps;

export const Button = forwardRef(function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  return <DSButton {...props} ref={ref} />
})
