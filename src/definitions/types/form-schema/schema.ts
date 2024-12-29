export type TFormSchemaProperty = Record<string, TFormSchemaPropertyValue>;

export type TFormSchemaPropertyValue =
  | TFormSchemaStringProperty
  | TFormSchemaBooleanProperty
  | TFormSchemaNumberProperty
  | TFormSchemaObjectProperty
  | TFormSchemaArrayProperty;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TOneOf = { title: string; const?: any; isName?: boolean }[];
export type TFormSchemaStringProperty = {
  type: 'string';
  enum?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oneOf?: TOneOf;
  default?: string;
  title?: string;
  description?: string;
};
export type TFormSchemaBooleanProperty = {
  type: 'boolean';
  oneOf?: TOneOf;
  default?: boolean;
  title?: string;
};
export type TFormSchemaNumberProperty = {
  type: 'number';
  maximum?: number;
  minimum?: number;
  default?: number;
  oneOf?: TOneOf;
  title?: string;
};
export type TFormSchemaObjectProperty = {
  type: 'object';
  properties: TFormSchemaProperty;
};
export type TFormSchemaArrayProperty = {
  type: 'array';
  items: TFormSchemaPropertyValue;
};

export type TFormSchema = TFormSchemaObjectProperty;
