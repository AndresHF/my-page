import { useResponsive } from "../../../hooks/useResponsive";
import { useState } from "react";
import { ReactNodeLike } from "prop-types";
import MenuIcon from "../svgComponents/MenuIcon";

type CollapsableMenuProps = {
  menu: ReactNodeLike;
  style?: React.CSSProperties;
};

const CollapsableMenu: React.FC<CollapsableMenuProps> = ({ menu, style }) => {
  const { mdAndDown } = useResponsive();
  const [open, setOpen] = useState(!mdAndDown);
  if (!mdAndDown) return <div>{menu}</div>;
  return (
    <>
      {mdAndDown && (
        <MenuIcon
          onClick={() => setOpen(!open)}
          className={`${open ? "rotate" : "rotate--reverse"}`}
        />
      )}
      <div className={`menu__wrapper fade${open ? "In" : "Out"}__left`}>
        {menu}
      </div>
    </>
  );
};
export default CollapsableMenu;
