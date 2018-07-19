import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuItem = styled(NavLink)`
  transition: all 0.2s linear;
  color: ${({ dark }) => (dark ? props => props.theme.darkColor.darkGrey :  props => props.theme.neutralColor.white)};
  cursor: pointer;
  width: 100%;
  display: inline-block;
  padding: 0 0.5em;
  font-size: 1.15em;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ?  props => props.theme.lightColor.lightGrey : props => props.theme.lightColor.lighterGrey)};
  }
  &:focus {
    color: ${({ dark }) => (dark ? props => props.theme.darkColor.darkGrey :  props => props.theme.neutralColor.white)};
    text-decoration: none;
  }
`;
export default MenuItem;
