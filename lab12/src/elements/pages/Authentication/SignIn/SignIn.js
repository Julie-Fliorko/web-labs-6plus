import React, {Component} from 'react';
import {signInWithGoogle} from '../../../../firebase/utils'
import '../SignIn/signIn.css'
import Button from '../../../../forms/Button/button'


class SignIn extends Component {
    handleSublit = async e => {
        e.preventDefault();
    }
    render(){
    return(
        <div className="signin">
            <div className="wrap">
                <h2>Log in</h2>
            </div>
            <div className="formWrap">
                <form onSubmit={this.handleSublit}>
                    <div className="socialSignin">
                        <div className="row">
                            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    }
}
export default SignIn;