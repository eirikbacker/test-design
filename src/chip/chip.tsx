import { ChipButton as DSChip, type ChipButtonProps } from "@digdir/designsystemet-react";
import { forwardRef } from "react";

export type ChipProps = ChipButtonProps;

export const Chip = forwardRef(function Button(props: ChipProps, ref: React.Ref<HTMLButtonElement>) {
  return <DSChip {...props} ref={ref} />
})
