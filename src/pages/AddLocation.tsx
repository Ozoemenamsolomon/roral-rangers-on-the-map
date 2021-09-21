import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import SooPopup from '../components/SooPopup';
import { addLocation, db } from '../utils/firebase';
import InputLabel from '../components/InputLabel';
import { FormikValues, useFormik } from 'formik';

export interface AddLocationProps {}

export interface LocationProps {
  churchName: string;
  address: string;
  section: string;
  district: string;
  alias: string;
  state: string;
  telephone: number | string;
  hasRanger: Boolean | null;
  coordinate: string;
  realCoordinate?: { latitude: number; longitude: number };
}

const AddLocation: React.FC<AddLocationProps> = () => {
  const defaultValue: FormikValues = {
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

  const [formValue, setFormValue] = useState(defaultValue);
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

  const formik = useFormik({
    initialValues: defaultValue,
    onSubmit: handleChange,
  });

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
            <InputLabel
              type="text"
              name="churchName"
              id=""
              value={formik.values.churchName}
              onChange={formik.handleChange}
              label="Church Name"
            />
            <InputLabel
              type="text"
              name="address"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              label="Adress"
            />
            <InputLabel
              label="Section"
              type="text"
              name="section"
              id="section"
              value={formik.values.section}
              onChange={formik.handleChange}
            />
            <InputLabel
              type="text"
              name="district"
              id=""
              value={formik.values.district}
              onChange={formik.handleChange}
              label="District"
            />
            <InputLabel
              type="text"
              name="alias"
              id="alias"
              value={formik.values.alias}
              onChange={formik.handleChange}
              label="Alias"
            />
            <InputLabel
              type="text"
              name="state"
              id="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              label="State"
            />
            <InputLabel
              type="tel"
              name="telephone"
              id="telephone"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              label="Telephone"
            />
            <InputLabel
              type="checkbox"
              name="hasRangers"
              id="hasRangers"
              onChange={formik.handleChange}
              label="Rangers?"
            />
            <InputLabel
              type="text"
              name="coordinate"
              id="co-ord"
              placeholder="paste coordinate"
              value={formik.values.coordinate}
              onChange={formik.handleChange}
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
