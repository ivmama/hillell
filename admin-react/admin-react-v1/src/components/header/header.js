import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <ToolbarWrapper>
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/" exact>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/users">
            Users
          </Button>
          <Button color="inherit" component={NavLink} to="/about">
            About
          </Button>
        </Toolbar>
      </ToolbarWrapper>
    </AppBar>
  );
};

export default Header;
