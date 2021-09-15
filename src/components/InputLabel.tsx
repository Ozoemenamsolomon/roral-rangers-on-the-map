import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputLabelProps {
  type: string;
  name: string;
  id: string;
  value?: string | number;
  onChange: ChangeEventHandler;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  label,
  children,
}) => {
  return (
    <InputLabelWrapper>
      <label htmlFor={id}>{label}</label>
      <SooInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {children}
    </InputLabelWrapper>
  );
};

export default InputLabel;

const InputLabelWrapper = styled.div`
  display: flex;
  & > input {
    padding: 0.5rem 0.3rem;
  }

  & > div {
    flex: 1;
  }
  & > label {
    flex: 0.5;
  }
`;
const SooInput = styled.input`
  min-height: 2rem;
  flex: 1;
`;
