import React from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
    margin-top: 70px;
    margin-left: 30px;
    
`
const InputTag = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    background-color: #fdefb8;
    height: 30px;
    margin-left: -5px;
`

const InputButton = styled.button`
    width: 30px;
    height: 33px;
    margin-left: 10px;
    border: none;
    background-color: #b3b18b;
    border-radius: 5px;
    cursor: pointer;
`
const Input = () => {
    return (
        <InputBox>
            <InputTag>

            </InputTag>
            <InputButton>+</InputButton>
        </InputBox>
    )
}

export default Input