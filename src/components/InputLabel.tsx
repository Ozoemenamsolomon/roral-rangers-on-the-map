import React, { ChangeEventHandler } from 'react';
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
  required?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  label,
  children,
  required,
  readOnly,
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
        required={required}
        readOnly={readOnly}
      />
      {children}
    </InputLabelWrapper>
  );
};

export default InputLabel;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const SooInput = styled.input`
  min-height: 2.5rem;
  flex: 1;
  padding: 0.5rem 0.3rem;
  border-width: 1px;
  border-radius: 0.5rem;
`;
