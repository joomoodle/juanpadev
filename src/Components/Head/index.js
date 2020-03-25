import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Styles, {
  MainContainer,
  SideMenu,
  Menu,
  Hamburgesa,
  UlMobile,
  LinkA,
  LinkLi
} from "./Styles";

const menu = [
  {
    index: 0,
    text: "Inicio",
    action: "/home"
  },
  {
    index: 1,
    text: "Acerca de mi",
    action: "/about"
  },
  {
    index: 2,
    text: "Portafolio",
    action: "/portafolio"
  },
  {
    index: 3,
    text: "Contacto",
    action: "/contacto"
  }
];
const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenu = () => {
    return menu.map(item => (
      <LinkLi key={item.index}>
        <NavLink to={item.action} style={Styles.a}>
          {item.text}
        </NavLink>
      </LinkLi>
    ));
  };

  return (
    <MainContainer>
      <div style={Styles.row}>
        <span style={Styles.titleApp}>
          JuanPa<span style={{ color: "red" }}>.</span>Dev
        </span>
      </div>
      <SideMenu>
        <Menu>
          <ul style={Styles.ul}>{renderMenu()}</ul>
        </Menu>
        <Hamburgesa>
          <IconButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={{ top: -14 }}
          >
            <MenuIcon style={{ color: "#ffffff", fontSize: 40 }} />
          </IconButton>
        </Hamburgesa>
      </SideMenu>
      {isOpen ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "#1F2235",
            zIndex: 10,
            top: 85
          }}
        >
          <UlMobile>{renderMenu()}</UlMobile>
        </div>
      ) : (
        ""
      )}
    </MainContainer>
  );
};

export default Head;
