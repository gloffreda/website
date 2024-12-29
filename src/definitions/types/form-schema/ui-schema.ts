import { TLabelProps } from '../../../components/Typography';

export type TUiFormSchemaElements = Array<TUiFormSchemaElement>;

export type TUiFormSchemaElement =
  | TUiFormSchemaControlElement
  | TUiFormSchemaLabelElement
  | TUiFormSchemaLayoutElement
  | { type: 'Blank' }
  | { type: 'Separator'; props: { className: string } };

export type TUiFormSchemaControlElement = {
  type: 'Control';
  scope: string;
  label?: string;
  kind?: 'select' | 'options' | 'textarea';
  rule?: TUiFormSchemaRule;
};

export type TUiFormSchemaLabelElement = {
  type: 'Label';
  text: string;
  props?: TLabelProps;
};

type TUiFormSchemaRule = {
  effect: 'HIDE';
  condition: {
    scope: string;
    schema: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const: any;
    };
  };
};

export type TUiFormSchemaLayoutElement = {
  type: 'VerticalLayout' | 'HorizontalLayout';
  elements: TUiFormSchemaElements;
  rule?: TUiFormSchemaRule;
};

export type TUiFormSchema = TUiFormSchemaLayoutElement;
