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

export const LogoWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #f76f39;
  padding-bottom: 0.5em;
  margin-bottom: 2em;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  text-transform: uppercase;
  padding: 0.3em 0;
  display: inline-block;
  text-decoration: none;
  color: ${({ dark }) => (dark ? "#333" : "#fff")};
  font-size: 1.15em;
  transition: all 0.15s ease-in-out;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ? "#777" : "#a3a3a3")};
  }
  &:focus {
    text-decoration: none;
    color: ${({ dark }) => (dark ? "#333" : "#fff")};
  }
`;

export const MenuContent = styled.div`
  transition: all 0.2s linear;
  background: ${({ dark }) => (dark ? "rgba(255,255,255,.75)" : "rgba(0,0,0,.75)")};
  width: 100%;
  height: calc(100% + 6em);
  padding: 3em;
`;

export const MenuItem = styled(NavLink)`
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
    border-left: 1px solid ${({ dark }) => (dark ? "#555" : "#fff")};
  }
`;

export const TogglerWrapper = styled.div`
  transition: all 0.2s linear;
  background: ${({ dark }) => (dark ? "rgba(255,255,255,.75)" : "rgba(0,0,0,.75)")};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 3.5em 0;
`;
