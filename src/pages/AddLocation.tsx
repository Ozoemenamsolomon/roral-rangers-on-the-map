import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import SooPopup from '../components/SooPopup';
import { addLocation, db } from '../utils/firebase';
import InputLabel from '../components/InputLabel';
import Container from '../components/Container';

export interface AddLocationProps {}

export interface LocationProps {
  churchName: string;
  address: string;
  section: string;
  district: string;
  alias: string;
  state: string;
  telephone: number;
  hasRanger: Boolean | null;
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
    telephone: 0,
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
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    <Container maxWidth="1200px" width={85}>
      <h1>Add a Location</h1>
      <p>Let´s put Royal Rangers Nigeria on the map! 👮🏽‍♂️</p>
      <FormWrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormContainer>
            <InputLabel
              type="text"
              name="churchName"
              id=""
              value={formValue.churchName}
              onChange={handleChange}
              label="Church Name"
            />
            <InputLabel
              type="text"
              name="address"
              id="address"
              value={formValue.address}
              onChange={handleChange}
              label="Address"
            />
            <InputLabel
              label="Section"
              type="text"
              name="section"
              id="section"
              value={formValue.section}
              onChange={handleChange}
            />
            <InputLabel
              type="text"
              name="district"
              id=""
              value={formValue.district}
              onChange={handleChange}
              label="District"
            />
            <InputLabel
              type="text"
              name="alias"
              id="alias"
              value={formValue.alias}
              onChange={handleChange}
              label="Alias"
            />
            <InputLabel
              type="text"
              name="state"
              id="state"
              value={formValue.state}
              onChange={handleChange}
              label="State"
            />
            <InputLabel
              type="tel"
              name="telephone"
              id="telephone"
              value={formValue.telephone}
              onChange={handleChange}
              label="Telephone"
            />
            <InputLabel
              type="checkbox"
              name="hasRangers"
              id="hasRangers"
              onChange={handleChange}
              label="Rangers?"
            />
            <InputLabel
              type="text"
              name="coordinate"
              id="co-ord"
              placeholder="paste coordinate"
              value={formValue.coordinate}
              onChange={handleChange}
              readOnly={autoLocation}
              label="Coordinate"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            <button type="submit" onClick={submitForm}>
              Submit
            </button>
          </FormContainer>
        </form>
      </FormWrapper>
    </Container>
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
