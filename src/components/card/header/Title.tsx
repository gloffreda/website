import { Label, TLabelProps } from '../../Typography';

export function Title(props: TLabelProps) {
  return <Label size='lg' weight='semibold' className='truncate' htmlTitle={props.text} {...props} />;
}
