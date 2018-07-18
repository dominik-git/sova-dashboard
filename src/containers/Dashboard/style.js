import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    width:80%;
    padding: 3em;
    transition: all .2s linear;
    height: 100%;
    background: ${({ dark }) => (dark ? "rgba(255,255,255,.75)" : "#222")};
`;

export const DashboardWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
