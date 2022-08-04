import React from 'react'
import Header from './Header'
import Input from './Input'
import TodoItem from './TodoItem'
import styled from 'styled-components';
import BackgroundImg from '../images/phone_img2.webp'

const LayoutBox = styled.div`
    width: 100%;
    height: 100vh;
    `
const Container = styled.div`
    //핸드폰 이미지
    //background-image: url(${BackgroundImg});
    //background: cover;
    //background-repeat: no-repeat;
    //background-position: center; //이미지 가운데로
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px pink solid;
    flex-direction: column;
`
const PhoneSize = styled.div`
    background-color: #fdefb8;
    width: 500px;
    height: 800px;
    border-radius: 15px;
    display: flex;
    //align-items: center;
    border: 1px pink solid;
    flex-direction: column;
`
const DateInput = styled.div`
    display: flex;
    margin: -30px auto 10px auto;
    padding: 2rem;
    border-bottom: 1px solid gray;
`

const Layout = () => {
    return (
        <LayoutBox>
            <Container>
                <PhoneSize>
                    <DateInput>
                        <Header />
                        <Input />
                    </DateInput>
                </PhoneSize>
            </Container>
        </LayoutBox>
    )
}

export default Layout