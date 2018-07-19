import styled from "styled-components";

export const Wrapper = styled.div`
    width:80%;
    padding: 3em;
    transition: all .2s linear;
    height: 100%;
    background: ${({ dark }) => (dark ? "#fff" : "#111")};
`;

export const DashboardWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
