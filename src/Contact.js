import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap';
import $ from 'jquery';

const data = {
  access_token: 'gfqdvqp7s6jh3pqtcqrqqapl'
};
const onSuccess = () => true;
const onError = () => false;
const send = mailForm => {
  $('#send').val('Sending...');
  data['subject'] = 'message from portfolio';
  data['text'] = `${mailForm.email} ${mailForm.name} ${mailForm.message}`;

  $.post('https://postmail.invotes.com/send', data, onSuccess).fail(onError);
  return false;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      buttonTxt: 'Send'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    } else if (e.target.name === 'email') {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ message: e.target.value });
    }
  }

  handleSubmit() {
    let mailForm = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.name
    };
    this.setState({ buttonTxt: 'Sending...' });
    send(mailForm);
    this.setState({ buttonTxt: 'Sent' });
  }

  render() {
    return (
      <div>
        <section id="contact" name="contact" />
        <div id="contactwrap">
          <Grid>
            <Row>
              <Col lg={6}>
                <p>CONTACT ME TODAY</p>
                <p>Paul Hosler</p>
                <p>
                  <small>New Orleans, LA</small>
                </p>
                <p>
                  <small>
                    Mail info@pahosler.com<br />
                  </small>
                </p>
              </Col>

              <Col lg={6}>
                <form>
                  <FormGroup controlId="mail-me">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      name="name"
                      type="text"
                      value={this.state.name}
                      placeholder="Your Name"
                      onChange={this.handleChange}
                    />
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl
                      name="email"
                      type="email"
                      value={this.state.email}
                      placeholder="Your E-Mail"
                      onChange={this.handleChange}
                    />
                    <ControlLabel>Message</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                    <HelpBlock>
                      <p>
                        Powered by{' '}
                        <a
                          href="https://postmail.invotes.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PostMail
                        </a>
                      </p>
                    </HelpBlock>
                  </FormGroup>
                  <Button id="send" onClick={this.handleSubmit}>
                    {this.state.buttonTxt}
                  </Button>
                </form>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
