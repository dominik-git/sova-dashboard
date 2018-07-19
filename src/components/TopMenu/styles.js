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
    width: auto;
    line-height: ${({ height }) => height}px;
    // border:2px solid #f76f39;
    justify-content: center;
    text-align:center;
    // padding: 0 2em;
    // border-top-left-radius: 50%;
    // border-bottom-left-radius: 50%;
    // border-top-right-radius: 50%;
`;

export const Letter = styled.span`
    font-size: 1.4em;
    font-weight: 500;
    color: ${({ dark }) => (dark ? "#333" : "#fff")};
    padding-bottom: 2px;
    position: relative;
    bottom:2px;
    cursor: pointer;
`;

export const Logout = styled.span`
    transition: all .5s linear;
    font-size: 1.2em;
    font-weight: 500;
    position: relative;
    bottom: .6em;
    cursor:pointer;
    float:right;
    color: ${({ dark }) => (dark ? "#333" : "#fff")};
`;
