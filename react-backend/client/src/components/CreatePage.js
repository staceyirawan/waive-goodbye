import React, { Component, Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './CreatePage.css';

'use strict';

const contactArray = [{
    name: 'John Smith',
    email: 'sirawan@usc.edu'
},{
    name: 'Melanie Hamasaki',
    email: 'mhamasak@usc.edu'
},{
    name: 'Anthony Ramos',
    email: 'ramosaj@usc.edu'
}];


export default class CreatePage extends Component {
  constructor(props){

  super(props);
    this.state = {
    eventName:'',
    eventDate:'',
    pdfString:'',
    stringContactName:'',
    stringContactEmail:''
     
};


this.handleChange = this.handleChange.bind(this);
this.handleDateChange = this.handleDateChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(event) {
  this.setState({eventName: event.target.value });
}
handleDateChange(event) {
  this.setState({eventDate: event.target.value });
}
handleContactNameChange(event) {
  this.setState({stringContactName: event.target.value });
}
handleContactEmailChange(event) {
  this.setState({stringContactEmail: event.target.value });
}

uploadFiles(event){
  let reader = new FileReader();
  let file = event.target.files[0];

    this.setState({pdfString: file.name});

}


handleSubmit(event) {
  var nameArray = this.state.stringContactName.split(',');
  var emailArray = this.state.stringContactEmail.split(',');
  var body = {
    name: this.state.eventName,
    date: this.state.eventDate,
    pdfString: this.state.pdfString,
    contactNames: nameArray,
    contactEmail: emailArray
  };
  //stop trying to make fetch happen
}



  render() {
    return (

       <form onSubmit={this.handleSubmit}>
               
                <p className={styles.input_title}>Event Name</p>
                <input type="text" id="eventName"  className={styles.login_box} onChange = {this.handleChange.bind(this)} placeholder="Event Name" required autoFocus />
                <p className={styles.input_title}>Event Date</p>
                <input type="text" id="eventDate" className={styles.login_box} onChange = {this.handleDateChange.bind(this)} placeholder="01/01/2017" required />
                
                <div>
                <div className={styles.contactInputs}>
                <p className={styles.input_title}>Contact Names (separate by comma)</p>
                <textarea id="eventDate" className={styles.login_box} onChange = {this.handleContactNameChange.bind(this)} placeholder="John Smith, Will Smith" required >
                </textarea>
                </div>

                <div className={styles.contactInputs}>
                <p className={styles.input_title}>Contact Emails (separate by comma)</p>
                <textarea id="eventDate" className={styles.login_box} onChange = {this.handleContactEmailChange.bind(this)} placeholder="jsmith@email.com, wsmith@email.com" required >
                </textarea>
                </div>
                </div>

                <div>
                <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.uploadFiles(e)} />
               
             
              <text>
              {this.state.pdfString}
              </text>
              </div>

                <p className={styles.input_title}></p>
                <div className={styles.btnContainer}>
                <button className={styles.btn} type="submit">Create Event</button>
                </div>
</form>
        
          

          
         
      );
    
      
  }
}


