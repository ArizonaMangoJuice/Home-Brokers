import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Contact.css'

const ContactTextArea = (props) => (
  <textarea className='contact-textarea' type="textarea" {...props}/>
)

const ContactErrorMessage = (props) => (
  <div className='contact-error-msg error'>
    {props.msg}
  </div>
)

const Contact = () => (
  <div>
    <Formik
      initialValues={{ email: '', firstname: '', lastname: '', phone: '', textarea: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email Is Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid Email Address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='contact-form'>
          <Field className='contact-formatting full-width-form-link' type="text" name="firstname" placeholder="First Name"/>
          <ErrorMessage name="firstname" component="div" />
          <Field className='contact-formatting full-width-form-link' type="text" name="lastname" placeholder="Last Name"/>
          <ErrorMessage name="lastname" component="div" />
          <Field className='contact-formatting half-width-form-link' type="email" name="email" placeholder="email"/>
          <Field className='contact-formatting half-width-form-link' type="text" name="phone" placeholder="Phone Number"/>
          <ErrorMessage name="email">{msg => <ContactErrorMessage msg={msg}/>}</ErrorMessage>
          <ErrorMessage name="phone" component="div" />
          <Field className='contact-formatting full-width-form-link' as={ContactTextArea} name="comments" placeholder="Additional Comments"/>
          <ErrorMessage name="textarea" component="div" />
          <button className='contact-formatting contact-button' type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Contact;