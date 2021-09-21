import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import SooPopup from '../components/SooPopup';
import { addLocation, db } from '../utils/firebase';
import InputLabel from '../components/InputLabel';
import { Field, Formik, FormikHelpers, FormikValues, useFormik } from 'formik';

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
  console.log(Field, Formik);
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
    const success = ({ coords }: GeolocationPosition) => {
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

  // const submitForm = (e: MouseEvent) => {
  //   e.preventDefault();
  //   console.log(formValue);
  //   addLocation(db, {
  //     ...formValue,
  //     realCoordinate: {
  //       longitude: parseFloat(formValue.coordinate.split(',')[0]),
  //       latitude: parseFloat(formValue.coordinate.split(',')[1]),
  //     },
  //   }).then((a) => console.log(a));
  // };

  return (
    <div>
      <h1>Add a Location</h1>
      <p>Let´s put Royal Rangers Nigeria on the map! 👮🏽‍♂️</p>
      <FormWrapper>
        <Formik
          initialValues={{
            churchName: '',
            address: '',
            section: '',
            district: '',
            alias: '',
            state: '',
            telephone: '',
            hasRanger: null,
            coordinate: '',
          }}
          onSubmit={function (
            values: LocationProps,
            formikHelpers: FormikHelpers<LocationProps>
          ): void | Promise<any> {
            console.log(values);
          }}
        >
          <FormContainer>
            <Field type="text" name="churchName" id="" label="Church Name" />
            <Field type="text" name="address" id="address" label="Adress" />
            <Field label="Section" type="text" name="section" id="section" />
            <Field type="text" name="district" id="" label="District" />
            <Field type="text" name="alias" id="alias" label="Alias" />
            <Field type="text" name="state" id="state" label="State" />
            <Field
              type="tel"
              name="telephone"
              id="telephone"
              label="Telephone"
            />
            <Field
              type="checkbox"
              name="hasRangers"
              id="hasRangers"
              label="Rangers?"
            />
            <Field
              type="text"
              name="coordinate"
              id="co-ord"
              placeholder="paste coordinate"
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
            <button type="submit">Submit</button>
          </FormContainer>
        </Formik>
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
