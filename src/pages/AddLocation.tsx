import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import SooPopup from '../components/SooPopup';
import { addLocation, db } from '../utils/firebase';

export interface AddLocationProps {}

export interface LocationProps {
  churchName?: string;
  address?: string;
  section?: string;
  district?: string;
  alias?: string;
  state?: string;
  telephone?: number | string;
  hasRanger?: Boolean | null;
  coordinate: string;
  realCoordinate?: { latitude: number; longitude: number };
}

const AddLocation: React.FC<AddLocationProps> = () => {
  const defaultFontValue: LocationProps = {
    churchName: '',
    address: '',
    section: '',
    district: '',
    alias: '',
    state: '',
    telephone: '',
    hasRanger: null,
    coordinate: '',
  };

  const [formValue, setFormValue] = useState(defaultFontValue);
  const [autoLocation, setAutoLocation] = useState(false);

  const getUserLocation = () => {
    // TODO show popup first before asking for location permission
    const success = ({ coords }: any) => {
      setFormValue({
        ...formValue,
        coordinate: `${coords.latitude},${coords.longitude}`,
      });
      setAutoLocation(true);
    };
    const error = (error: any) => {
      console.error(error.message);
    };

    window.navigator.geolocation.getCurrentPosition(success, error);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.type === 'checkbox') {
      console.dir(e.target);
    } else {
      switch (e.target.name) {
        case 'churchName':
          setFormValue({ ...formValue, churchName: e.target.value });
          break;
        case 'address':
          setFormValue({ ...formValue, address: e.target.value });
          break;
        case 'section':
          setFormValue({ ...formValue, section: e.target.value });
          break;
        case 'district':
          setFormValue({ ...formValue, district: e.target.value });
          break;
        case 'alias':
          setFormValue({ ...formValue, alias: e.target.value });
          break;
        case 'state':
          setFormValue({ ...formValue, state: e.target.value });
          break;
        // TODO work on the number issue
        case 'telephone':
          setFormValue({ ...formValue, telephone: e.target.value });
          break;
        case 'coordinate':
          setFormValue({ ...formValue, coordinate: e.target.value });
          break;
        default:
          break;
      }
    }
  };

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();
    console.log(formValue);
    addLocation(db, {
      ...formValue,
      realCoordinate: {
        longitude: parseFloat(formValue.coordinate.split(',')[0]),
        latitude: parseFloat(formValue.coordinate.split(',')[1]),
      },
    }).then((a) => console.log(a));
  };

  return (
    <div>
      <h1>Add a Location</h1>
      <p>Let´s put Royal Rangers Nigeria on the map! 👮🏽‍♂️</p>
      <FormWrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormContainer>
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

            <InputLabelWrapper>
              <label htmlFor="co-ord">Coordinate</label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                  type="text"
                  name="coordinate"
                  id="co-ord"
                  placeholder="paste coordinate"
                  value={formValue.coordinate}
                  onChange={handleChange}
                  readOnly={autoLocation}
                />
                <span>or</span>

                <SooPopup
                  trigger={
                    <button onClick={getUserLocation}>
                      Get Current Position
                    </button>
                  }
                  btns={[
                    {
                      handler: getUserLocation,
                      content: 'Continue',
                    },
                  ]}
                >
                  Your permission is needed to enable the app get your location,
                  please click <strong>continue</strong> to allow
                </SooPopup>
              </div>
            </InputLabelWrapper>
            <button type="submit" onClick={submitForm}>
              Submit
            </button>
          </FormContainer>
        </form>
      </FormWrapper>
    </div>
  );
};

export default AddLocation;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const FormWrapper = styled.div`
  max-width: 350px;
`;

const InputLabelWrapper = styled.div`
  display: flex;
  background-color: red;
  & > input {
    padding: 0.5rem 0.3rem;
  }
  & > input,
  & > div,
  & > textarea {
    flex: 1;
  }
  & > label {
    flex: 0.5;
  }
`;
