import React from "react";
import styled from "styled-components";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #fbfcfc;
  color: black;
  padding: 16px;
`;
const TextWrapper = styled("span")`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonDivWrapper = styled("div")`
  display: flex;
  align-items: center;
  color: black;
`;

const ButtonWrapper = styled("button")`
  border: unset;
  background-color: #blue;
  height: 20px;
  border-radius: 4px;
  margin-right: 2px;
  color: black;
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
  border-color: black;
`;

export default function CalendarHeader({ value, setValue }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function todayButton() {
    return value.clone().format('D')
  }
  return (
    <DivWrapper>
      <TitleWrapper>
        {currMonthName()} {currYear()}
      </TitleWrapper>
      <ButtonDivWrapper>
        <ButtonWrapper
          className="previous"
          onClick={() => setValue(prevMonth())}
        >
          &lt;
        </ButtonWrapper>
        <TodayButton >Today</TodayButton>
        <ButtonWrapper className="next" onClick={() => setValue(nextMonth())}>
          &gt;
        </ButtonWrapper>
      </ButtonDivWrapper>
    </DivWrapper>
  );
}
