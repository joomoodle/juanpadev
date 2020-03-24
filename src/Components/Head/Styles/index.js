import styled from "styled-components";

const MainContainer = styled.div`
  height: 85px;
  width: 100%;
  background-color: #1f2235;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

const SideMenu = styled.div`
  width: 70%;
  flex-direction: row;
`;
const Menu = styled.div`
  padding-top: 20px;
  padding-left: 150px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Hamburgesa = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding-top: 20px;
    padding-left: 85%;
  }
`;

const UlMobile = styled.ul`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const LinkLi = styled.li`
  display: inline;
  margin: 20px;
  @media (max-width: 1024px) {
    display: block;
    margin: 0;
    margin-bottom: 20px;
    padding-left: 100px;
  }
`;

const LinkA = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 28px;
  &:hover {
    color: rgb(255, 74, 87);
  }
`;

export { MainContainer, SideMenu, Menu, Hamburgesa, UlMobile, LinkA, LinkLi };

export default {
  header: {
    height: "85px",
    width: "100%",
    backgroundColor: "#1F2235",
    display: "flex",
    flexDirection: "row",
    zIndex: 10
  },
  row: {
    width: "30%",
    flexDirection: "row"
  },
  titleApp: {
    fontSize: 28,
    color: "#fff",
    paddingLeft: 100,
    paddingTop: 20,
    display: "block",
    fontWeight: "bold"
  },

  ul: {
    listStyleType: "none",
    margin: 0,
    paddingLeft: 80
  },
  li: {
    display: "inline",
    margin: 20
  },
  a: {
    color: "#ffffff",
    fontSize: 28,
    textDecoration: "none",
    '&:hover': {
      color: 'rgb(255, 74, 87)',

    }
  }
};
