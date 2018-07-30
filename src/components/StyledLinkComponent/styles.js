import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLinkComponent = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    width: 100%;
    color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
    font-size: 1.15em;
    justify-content: center;
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
