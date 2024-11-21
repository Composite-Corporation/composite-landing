import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  href?: string;
}

const Button = ({ primary, modifier, children, href, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-green-400 text-white border-green-300 hover:bg-green-600`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  if (href) {
    return (
      <a href={href} className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
