import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input
          placeholder='Digite o nome do repositório que você quer adicionar à lista'
          value={value}
          onChange={onChange}/>
    </InputContainer>
  )
}

export default Input
