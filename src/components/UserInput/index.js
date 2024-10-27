import React from "react";

import { InputContainer } from './styles';


const UserInput = ({value, onChange}) => {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={value}
        onChange={onChange}/>
    </InputContainer>
  )
}

export default UserInput;