import { Form, Field, Formik, ErrorMessage } from "formik";
import { TextField } from "../common/TextField";
import { Button } from "../common/Button";
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
        <Form className="shadow border rounded-xl p-4 my-4">
          <div className="my-4">
            <label htmlFor="description" className="font-bold">
              Task description
            </label>
            <Field
              name="description"
              id="description"
              component={TextField}
              placeholder="Enter the description"
              autoFocus={true}
            />
            <ErrorMessage
              name="description"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>
          <Button text="Add" />
        </Form>
      </Formik>
    </>
  );
};