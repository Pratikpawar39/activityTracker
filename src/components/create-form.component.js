import React, { Component } from 'react'

export default class InputFields extends Component {
    constructor(){
        super();
        this.state = ({
            uniqueName : '',
            companyName : '',
            contactName : '',
            contactNumber : '',
            contactEmail : ''
        })

        this.onChangeUniqueName = this.onChangeUniqueName.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){

    }

    onChangeUniqueName(e) {
        this.setState({
            uniqueName: e.target.value
        })
    }

    onChangeCompanyName(e) {
        this.setState({
            companyName: e.target.value
        })
    }

    onChangeContactName(e) {
        this.setState({
            contactName: e.target.value
        })
    }

    onChangeContactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        })
    }

    onChangeContactEmail(e) {
        this.setState({
            contactEmail: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
    
        const inputvalues = {
            uniqueName: this.state.uniqueName,
            companyName: this.state.companyName,
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            contactEmail: this.state.contactEmail
        }
    
        console.log(inputvalues);
      }

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Unique Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.uniqueName}
              onChange={this.onChangeUniqueName}>
          </select>
        </div>
        <div className="form-group"> 
          <label>Company Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.companyName}
              onChange={this.onChangeCompanyName}
              />
        </div>
        <div className="form-group"> 
          <label>Contact Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.contactName}
              onChange={this.onChangeContactName}
              />
        </div>
        <div className="form-group"> 
          <label>Contact Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.contactNumber}
              onChange={this.onChangeContactNumber}
              />
        </div>
        <div className="form-group"> 
          <label>Contact Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.contactEmail}
              onChange={this.onChangeContactEmail}
              />
        </div>
        <div className="form-group">
          <input type="submit" value=" " className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
