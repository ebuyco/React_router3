import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: 'email',
            password: 'password',
            error: {
                message: ''
            }
        }    

    }

    signup(){
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.setState({error})
            })
    }
    

    render(){
        return(
            <div className="form-inline" style={{margin: '5%'}}>
                  <h2>SignUp</h2>
             <div className="form-group">
                   <input 
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                      />
                      <input 
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signup()}
                      >
                        SignUp

                      </button>
               </div>
               <div>
                <h6 className="danger">
                {this.state.error.message}
                </h6>        
              <div><Link to='/signin'>Already a user? Sign in instead</Link></div>
               </div>
           </div>
        )
    }
}

export default SignUp;