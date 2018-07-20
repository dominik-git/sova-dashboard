import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "Assets/bg.jpg";

export const Navigation = styled.nav`
  width: 20%;
  background: url(${bg}) 0 0 no-repeat;
  background-size: cover;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.2s linear;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  text-transform: uppercase;
  padding: 0.3em 0;
  display: inline-block;
  text-decoration: none;
  color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
  font-size: 1.15em;
  transition: all 0.15s ease-in-out;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ? ({ theme }) => theme.neutralColor.grey : ({ theme }) => theme.lightColor.lighterGrey)};
  }
  &:focus {
    text-decoration: none;
    color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
  }
`;

export const MenuContent = styled.div`
  transition: all 0.2s linear;
  background: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.bgNavbar : ({ theme }) => theme.lightColor.bgNavbar)};
  width: 100%;
  height: calc(100% + 6em);
  padding: 3em;
`;

export const ItemsWrapper = styled.div`
  padding-top: 2em;
  border-top: 2px solid #f76f39;
`;

export const MenuItem = styled(NavLink)`
  transition: all 0.2s linear;
  color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
  cursor: pointer;
  width: 100%;
  display: inline-block;
  padding: 0 0.5em;
  font-size: 1.15em;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ? ({ theme }) => theme.lightColor.lightGrey : ({ theme }) => theme.lightColor.lighterGrey)};
  }
  &:focus {
    color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
    text-decoration: none;
    border-left: 1px solid ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
  }
`;

export const TogglerWrapper = styled.div`
  align-self: flex-end;
  transition: all 0.2s linear;
  background: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.bgNavbar : ({ theme }) => theme.lightColor.bgNavbar)};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 3.5em 0;
`;
