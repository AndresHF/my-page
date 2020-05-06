

const Footer: React.FC = ({children}) => {
  return (
    <footer>
      {children && children || (
        <div>Default Footer</div>
      )}
    </footer>
  );
};
export default Footer;
