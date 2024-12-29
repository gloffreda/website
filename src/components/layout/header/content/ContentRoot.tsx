type TContentRootProps = {
  children: React.ReactNode;
  className?: string;
};
export default function ContentRoot({ children, ...props }: TContentRootProps) {
  return (
    <div className='w-full' {...props}>
      {children}
    </div>
  );
}
