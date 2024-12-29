export type TMenuContextState = {
  open?: boolean;
  slideActive?: boolean;
};

export type TMenuContext = {
  state: TMenuContextState;
  setOpen: (open: boolean) => void;
};
