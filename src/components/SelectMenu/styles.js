import styled from "styled-components";

export const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
`;
export const StyledSelect = styled.select`
border: 0;
font-size: 15px;
padding: 8;
width: calc(100%);
border: 1px solid ${props => props.theme.neutralColor.orange};
border-radius:10px;
outline: 0;
margin-top:20px;
`;
export const StyledOption = styled.option`
`;
