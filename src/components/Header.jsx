import React from 'react'
import styled from 'styled-components';

const DateBox = styled.div`
    display: flex;
    font-family: 'Poor Story', cursive;
    margin-top: 50px;
`
const DateText = styled.div`
    font-size: 30px;
    margin-top: 18px;
`
const DayText = styled.div`
    font-size: 50px;
    font-weight: 800;
`

function getDate() {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let dayOfWeek = week[new Date().getDay()];
    return dayOfWeek;
}

const Header = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const todayDate = String(date.getDate()).padStart(2, '0');;
    const day = getDate();
    console.log(month, todayDate, day)


    return (
        <DateBox>
            <DateText>{month + todayDate}</DateText>
            <DayText>{day}</DayText>
        </DateBox>
    )
}



export default Header