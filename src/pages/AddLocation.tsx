import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';

export interface AddLocationProps {}

const AddLocation: React.FC<AddLocationProps> = () => {
  const defaultFontValue: {
    churchName?: string;
    address?: string;
    section?: string;
    district?: string;
    alias?: string;
    state?: string;
    telephone?: number;
    hasRanger?: Boolean;
    coordinate?: string;
  } = {};
  const [formValue, setFormValue] = useState(defaultFontValue);
  const getUserLocation = (e: MouseEvent) => {
    const success = (success: any) => {
      console.log(success);
    };
    const error = (error: any) => {
      console.log(error);
    };

    e.preventDefault();
    window.navigator.geolocation.getCurrentPosition(success, error);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.type === 'checkbox') {
      console.log('this is a checkbox');
    } else {
      console.log(e.target.value);
    }
  };
  const submitForm = (e: MouseEvent) => {
    e.preventDefault();
    console.log('form submitted!');
  };

  return (
    <div>
      <h1>Add a Location</h1>
      <p>Let´s put Royal Rangers of Nigeria on the map⚡👮🏽‍♂️</p>
      <form
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          width: '27rem',
        }}
      >
        <InputLabelWrapper>
          <label htmlFor="churchName">Church Name</label>
          <input
            type="text"
            name="churchName"
            id=""
            value={formValue.churchName}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="address">Adress</label>
          <textarea
            name="address"
            id="address"
            value={formValue.address}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="section">Section</label>
          <input
            type="text"
            name="section"
            id="section"
            value={formValue.section}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="district">District</label>
          <input
            type="text"
            name="district"
            id=""
            value={formValue.district}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="alias">Alias</label>
          <input
            type="text"
            name="alias"
            id="alias"
            value={formValue.alias}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formValue.state}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            value={formValue.telephone}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <label htmlFor="hasRangers">Rangers?</label>
          <input
            type="checkbox"
            name="hasRangers"
            id="hasRangers"
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <div
          id="latlon"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <InputLabelWrapper>
            <label htmlFor="co-ord">Latitude</label>
            <input
              type="text"
              name="coordinate"
              id="co-ord"
              placeholder="paste coordinate"
              value={formValue.coordinate}
              onChange={handleChange}
            />
          </InputLabelWrapper>
          <span>or</span>
          <button onClick={getUserLocation}>Get Current Location</button>
        </div>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLocation;

const InputLabelWrapper = styled.div`
  display: flex;
  background-color: red;
  & > input,
  & > textarea {
    flex: 1;
  }
  & > label {
    flex: 0.4;
  }
`;
