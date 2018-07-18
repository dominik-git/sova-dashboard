import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: ${({ height }) => height}px;
    border-bottom: 2px solid #f76f39;
    display: flex;
    justify-content: flex-end;
`;

export const UserIcon = styled.div`
    height: ${({ height }) => height}px;
    width: ${({ height }) => height}px;
    line-height: ${({ height }) => height}px;
    border:2px solid #f76f39;
    justify-content: center;
    text-align:center;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
`;

export const Letter = styled.span`
    font-size: 1.4em;
    font-weight: bold;
    color: ${({ dark }) => (dark ? "#333" : "#fff")};
    padding-bottom: 2px;
    position: relative;
    bottom:2px;
`;
