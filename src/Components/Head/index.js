import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Styles, { MainContainer, SideMenu, Menu, Hamburgesa} from "./Styles";

const menu = [
  {
    index: 0,
    text: "Inicio",
    action: "#"
  },
  {
    index: 1,
    text: "Acerca de mi",
    action: "#"
  },
  {
    index: 2,
    text: "Portafolio",
    action: "#"
  },
  {
    index: 3,
    text: "Contacto",
    action: "#"
  }
];
const Head = () => {
  const renderMenu = () => {
    return menu.map(item => (
      <li style={Styles.li} key={item.index}>
        <NavLink to={item.action} style={Styles.a}>
          {item.text}
        </NavLink>
      </li>
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
          <MenuIcon  style={{color: '#ffffff', fontSize: 40 }}/>
        </Hamburgesa>
      </SideMenu>
    </MainContainer>
  );
};

export default Head;
