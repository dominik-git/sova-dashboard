import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLinkComponent = styled(NavLink)`
    width: 100%;
    text-transform: uppercase;
    margin: 0.3em 0;
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

export default StyledLinkComponent;
