import React from 'react'

class Contacts extends React.Component {
    render() {
        const users = this.props.user
       
                return (
                    <div>
                    {  
                      users.map((user, index) => {return (
                          <div key={index}>
                            <h2>{user.name}</h2>
                            <h2>{user.number}</h2>
                            <h2>{user.location}</h2>
                          </div>
                        );
                      })
                    }
                  </div>
                )
            
    }
}

export default Contacts;