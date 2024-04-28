import classNames from 'classnames';

interface ButtonLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  icon: string;
  isActive?: boolean;
}

export const ButtonIconLink = ({
  children,
  href,
  icon,
  isActive,
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={classNames(
        'flex gap-2 items-center px-4 py-3 rounded-full hover:cursor-pointer',
        {
          'text-white bg-gray-500 hover:bg-gray-300': !isActive,
        },
        {
          'bg-white text-primary': isActive,
        }
      )}
    >
      <div>{icon}</div>
      <div>{children}</div>
    </a>
  );
};
