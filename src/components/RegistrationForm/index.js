// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameErr: false,
    showLastNameErr: false,
    isSubmitted: false,
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()
    this.setState({showFirstNameErr: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()
    this.setState({showLastNameErr: !isValidLastName})
  }

  validFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  validLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameErr} = this.state
    const className = showFirstNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={className}
          type="text"
          id="firstName"
          value={firstNameInput}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
      </div>
    )
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameErr} = this.state
    const className = showLastNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={className}
          type="text"
          id="lastName"
          value={lastNameInput}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  renderRegistrationForm = () => {
    const {showFirstNameErr, showLastNameErr} = this.state
    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
        {this.renderFirstNameField()}
        {showFirstNameErr && <p className="err-msg">Required</p>}
        {this.renderLastNameField()}
        {showLastNameErr && <p className="err-msg">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitted: !prevState.isSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessiveView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="registration-form-container">
        <h1>Registration</h1>
        <div>
          {isSubmitted
            ? this.renderSubmissionSuccessiveView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
