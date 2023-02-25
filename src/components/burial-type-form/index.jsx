import { Formik } from "formik";
import styled from "styled-components";

const BurialTypeForm = ({ initialValues, onSubmit }) => {
  const ModalForm = styled.div`
    input,
    select {
      width: 100%;
      margin-bottom: 10px;
      height: 40px;
      padding: 10px;
    }
    button {
      background-color: #4caf50;
      color: white;
      padding: 5px 20px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }
  `;
  return (
    <ModalForm>
      <Formik
        initialValues={initialValues}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <select
              name="status"
              value={values.status}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && touched.status && errors.status}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </ModalForm>
  );
};

export default BurialTypeForm;
