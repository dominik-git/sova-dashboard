import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: ${({ height }) => height}px;
    border-bottom: 2px solid #f76f39;
    display: flex;
`;

export const LinkWrapper = styled.div`
    height: ${({ height }) => height}px;
    line-height: ${({ height }) => height}px;
    width: 100%;
`;
