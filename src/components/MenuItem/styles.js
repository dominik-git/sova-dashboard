import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuItem = styled(NavLink)`
  transition: all 0.2s linear;
  color: ${({ dark }) => (dark ? "#555" : "#fff")};
  cursor: pointer;
  width: 100%;
  display: inline-block;
  padding: 0 0.5em;
  font-size: 1.15em;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ? "#999" : "#a3a3a3")};
  }
  &:focus {
    color: ${({ dark }) => (dark ? "#555" : "#fff")};
    text-decoration: none;
  }
`;

export default MenuItem;
