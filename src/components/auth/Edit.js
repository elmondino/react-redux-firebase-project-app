import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Edit extends Component {
    state = {
        email: this.props.auth.email,
        uid: this.props.auth.uid
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state);
    }
    render() {
        const { email, uid } = this.props.auth
        if (!uid) return <Redirect to='/signin' />

        if (email) {
            return (
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Edit Profile</h5>
                        <div className="input-field">
                            <input type="email" id='email' onChange={this.handleChange} value={this.state.email} />
                            <label className="active" htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Update email address</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="container center">
                    <p>Loading Project...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (creds) => dispatch(editUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);