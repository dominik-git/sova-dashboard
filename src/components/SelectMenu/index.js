import React from "react";
import { StyledSelect, StyledOption, StyledWrapper,SelectWrapper } from "./styles";


const SelectMenu = props => (
  <StyledWrapper>
    <StyledSelect>
      <StyledOption> All</StyledOption>
      <StyledOption>Team1</StyledOption>
      <StyledOption>Team2</StyledOption>
      <StyledOption>Team3</StyledOption>
    </StyledSelect>

    <StyledSelect>
      <StyledOption>All</StyledOption>
      <StyledOption>Sprint1</StyledOption>
      <StyledOption>Sprint2</StyledOption>
      <StyledOption>Sprint3</StyledOption>
    </StyledSelect>
  </StyledWrapper>
);
export default SelectMenu;
