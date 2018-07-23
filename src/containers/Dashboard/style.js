import styled from "styled-components";

export const Wrapper = styled.div`
    width:80%;
    display: table;
    height: 100%;
    padding: 3em;
    transition: all .2s linear;
    background: ${({ dark }) => (dark ? "#fff" : "#111")};
`;

export const DashboardWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
