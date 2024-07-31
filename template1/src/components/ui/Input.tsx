import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "flex rounded-[8px] border-[1px] border-[#D0D5DD] px-4 py-3 text-accent_slate text_title-p",
        className,
      )}
      {...props}
    />
  );
};

export const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      className={cn(
        "font-poppins text-sm font-medium text-[#344054]",
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Input;
