import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './ContactForm.css'
import axios from 'axios'
import Loading from '../Loading/Loading';


let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


const ContactTextArea = (props) => (
  <textarea className='contact-textarea' type="textarea" {...props}/>
)

const ContactErrorMessage = (props) => (
  <div className='contact-error-msg error'>
    {props.msg}
  </div>
)

export default class ContactForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sent: false,
      confirmation: undefined,
    }
  }

  preventDefault = e => {
    e.preventDefault();
  }

  handleSubmit = (values) => {
    this.setState({
      sent: !this.state.sent,
      confirmation: ''
    })
    let email, firstname, lastname, phone, textarea = values;
    let data = {
      email: values.email,
      firstName: values.firstname,
      lastName: values.lastname,
      phoneNumber: values.phone,
      adittional: values.textarea
    }

    axios.post(REACT_APP_SERVER_URL, data)
    .then(res => {
      this.setState({
        sent: !this.state.sent,
        confirmation: 'Email has been Sent!'
      })

    }).catch(e => {
      console.log(e)
    })

  }

  render(){
    return (
    <div>
    {
      this.state.sent ? 
      
      <Loading /> : 

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
        setSubmitting(false);
        // this.preventDefault()

        // console.log(values)
        this.handleSubmit(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form className='contact-form'>
          {this.state.confirmation ? <p className='success'>{this.state.confirmation}</p> : ''}
          <p>Required fields are marked *</p>
          <Field className='contact-formatting full-width-form-link' type="text" name="firstname" placeholder="First Name"/>
          <ErrorMessage name="firstname" component="div" />
          <Field className='contact-formatting full-width-form-link' type="text" name="lastname" placeholder="Last Name"/>
          <ErrorMessage name="lastname" component="div" />
          <Field className='contact-formatting half-width-form-link' type="email" name="email" placeholder="email *"/>
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
    
    }
    
    
  </div>
    )
  }
}
