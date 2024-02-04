import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export const TodoForm = () => {
  const ipcRenderer = window.ipcRenderer;
  const initialValue = { description: "" };

  const onSubmit = (values) => {
    console.log(values);
    ipcRenderer.send("submit:todoForm", values);
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <Field name="description" id="description" />
            <ErrorMessage name="description" />
          </div>
          <button type="submit">save</button>
        </Form>
      </Formik>
    </>
  );
};
