type HeaderProps = {
  route: string;
};

const Header: React.FC<HeaderProps> = ({ route }) => {
  return (
    <header>
      <div>{`HEADER AT ${route}`}</div>
    </header>
  );
};
export default Header;
