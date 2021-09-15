import React from 'react'

class ContactsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "", number: "", location: ""}
    }
   

  handleName(e) {
    this.setState({name: e.target.value})
  }

  handleNumber(e) {
      this.setState({number: e.target.value})
  }

  handleLocation(e) {
      this.setState({location: e.target.value})
  }
 
  handleSubmit(e) {
    e.preventDefault()
   
    let user = {
        name: this.state.name,
        number: this.state.number,
        location: this.state.location,
    };

    this.props.addUser(user);

    this.setState({name: "", number: "", location: ""})

    // console.log(this.state.name, this.state.email, this.state.password)
    
  }


render() {
    return (
        <form onSubmit={(e) => this.handleSubmit(e)} >
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.handleName(e)}  /><br />
            <input type="text" name="number" placeholder="Number" value={this.state.number} onChange={(e) => this.handleNumber(e)}  /><br />
            <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={(e) => this.handleLocation(e)}  /><br />
            <input type="submit" />
        </form>
    )
}


}


export default ContactsForm;