import { Label } from '../../../Typography';

type TContentTitleProps = {
  text: string;
  isName?: boolean;
  values?: Record<string, string>;
};
export default function ContentTitle({ text, isName, values }: TContentTitleProps) {
  return <Label text={text} size='xl' className='block' breakLine isName={isName} values={values} />;
}
