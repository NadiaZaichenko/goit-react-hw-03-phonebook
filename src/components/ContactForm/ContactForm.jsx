import PropTypes from 'prop-types';
import { Formik, ErrorMessage} from 'formik';
import { object, string} from 'yup';
import {
    StyledLabel,
    StyledForm,
    StyledInput,
    StyledButton,
  } from './ContactForm.styled';

const initialValue = {
    name: '',
    number: ''
}

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = object().shape({
    name: string().max(20).matches(nameRegex, {
        message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    }).required(),
    number: string().min(3).matches(numberRegex, {
        message: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    }).required()
})

export const ContactForm = ({onSubmit}) => {
    function heandleSubmit(values, {resetForm}){
        onSubmit(values);
        resetForm();
    }
    return (
        <Formik
        initialValues ={initialValue}
        validationSchema={schema}
        onSubmit={heandleSubmit}
        >
             <StyledForm>
        <StyledLabel>
          Name
          <StyledInput
            name="name"
            type="text"
            placeholder="Enter a contact name"
          />
          <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            name="number"
            type="tel"
            placeholder="Enter a contact number"
          />
          <ErrorMessage name="number">
            {msg => <div className="message">{msg}</div>}
          </ErrorMessage>
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
