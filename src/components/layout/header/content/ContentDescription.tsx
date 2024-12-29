import { Label } from '../../../Typography';

type TContentDescriptionProps = {
  text: string;
  isName?: boolean;
  values?: Record<string, string>;
};
export default function ContentDescription({ text, isName, values }: TContentDescriptionProps) {
  return <Label text={text} size='sm' theme='light_gray' breakLine isName={isName} values={values} />;
}
