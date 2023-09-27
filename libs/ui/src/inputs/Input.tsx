import { Input as InputRoot } from '../shadcn/input';

type InputType = {
  type?:
    | 'button'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'alphanumeric';
  placeholder?: string;
  className?: string;
  inputmode?: string
};

export function Input({
  type = 'text',
  placeholder = 'Placeholder',
  className,
  ...props
}: InputType) {
  return (
    <InputRoot
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
}
