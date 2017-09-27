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
  access_token: 'g81t0kwltped8rlnywleaxzt'
};

const onSuccess = () => {
  console.log('Sent!');
};
const onError = () => {
  console.log('Not... sent');
};
const send = mailForm => {
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
      message: ''
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
    console.log(this.state.email);
    let mailForm = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.name
    };
    console.log('the mail is..', mailForm);
    send(mailForm);
  }

  render() {
    const dummySentences = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ];
    return (
      <div>
        <section id="contact" name="contact" />
        <div id="contactwrap">
          <Grid>
            <Row>
              <Col lg={6}>
                <p>CONTACT ME TODAY</p>
                <p>{dummySentences.slice(3, 0).join(' ')}</p>
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
                        <a href="https://postmail.invotes.com" target="_blank">
                          PostMail
                        </a>
                      </p>
                    </HelpBlock>
                  </FormGroup>
                  <Button componentClass="submit" onClick={this.handleSubmit}>
                    Submit
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
