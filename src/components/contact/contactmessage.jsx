import React, { Component } from "react";
import "materialize-css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactmessage.css";
import * as emailjs from "emailjs-com";
import Button from "../../utils/Button";
import Headings from "../../utils/headings";

class Contactmessage extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitted')
    // console.log(this.state)


    const { sender_email, sender_phone, sender_message } = this.state;

    const sender_name = `${this.state.first_name} ${this.state.last_name}`;

    const serviceId = "service_mi95gor";
    const templateId = "template_l0yb2ap";
    const userId = "user_f4qMBYQxjKIVHm1aAgQby";

    // console.log(sender_email, sender_phone, sender_message, sender_name)

    emailjs
      .send(
        serviceId,
        templateId,
        {
          sender_name,
          sender_email,
          sender_phone,
          sender_message,
        },
        userId
      )
      .then((response) => {
        // console.log(response);
        toast.success("Message Sent Successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    e.target.reset();
  };

  handleInput = (e) => {
    // console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="col s12 m6">
        <Headings text={localStorage.getItem('contactus')} color="var(--themecolor)" />
        {/* <h3>Contact Us</h3> */}
        <div className="row">
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="emailsuccesstoast"
          />
          <form className="col s12 center" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onInput={this.handleInput}
                  required={true}
                />
                <label htmlFor="first_name">{localStorage.getItem('firstname')}</label>
              </div>
              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">assignment_ind</i>
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onInput={this.handleInput}
                  required={true}
                />
                <label htmlFor="last_name">{localStorage.getItem('lastname')}</label>
              </div>

              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">email</i>
                <input
                  id="sender_email"
                  type="email"
                  className="validate"
                  onInput={this.handleInput}
                  required={true}
                />
                <label htmlFor="sender_email">{localStorage.getItem('emailtxt')}</label>
              </div>
              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">phone</i>
                <input
                  id="sender_phone"
                  type="tel"
                  className="validate"
                  onInput={this.handleInput}
                  required={true}
                />
                <label htmlFor="sender_phone">{localStorage.getItem('telephone')}</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="sender_message"
                  className="materialize-textarea"
                  onInput={this.handleInput}
                  required={true}
                ></textarea>
                <label htmlFor="sender_message">{localStorage.getItem('message')}</label>
              </div>
            </div>
            <Button buttontext={localStorage.getItem('submit')} className="center" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contactmessage;
