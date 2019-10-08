import React, { Component } from 'react'

export class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contact: this.props.contact
        }

        // This binding is necessary to make `this` work in the callback, if we are not using  the arrow functions
        // See the diffrence between handleNameChange() & handleMobileChange() event callbacks
        this.handleMobileChange = this.handleMobileChange.bind(this);

        //this.handleNameChange = this.handleNameChange.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Add / Edit Contact </h2>
                <hr />

                {/* <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" value={this.state.contact.name} onChange={(e) => this.handleNameChange(e)} required />
                    <input type="text" placeholder="Mobile" value={this.state.contact.mobile} onChange={this.handleMobileChange} required />
                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                    <button onClick={(e) => this.handleClear(e)}>Clear</button>
                </form> */}

                <form onSubmit={(e) => e.preventDefault()}>
                    <div class="form-row">
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="Name" value={this.state.contact.name} onChange={(e) => this.handleNameChange(e)} required />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="Mobile" value={this.state.contact.mobile} onChange={this.handleMobileChange} required />
                        </div>
                        <div class="col-2">
                            <button class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-secondary" onClick={(e) => this.handleClear(e)}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    handleNameChange(e) {
        console.log(e);
        //this.setState({contact: {name: e.target.value } });
        this.setState({ contact: { ...this.state.contact, ['name']: e.target.value } });

    }

    handleMobileChange(e) {
        console.log(e);
        //this.setState({contact: {mobile: e.target.value } });
        this.setState({ contact: { ...this.state.contact, ['mobile']: e.target.value } });
    }

    handleSubmit(e) {
        console.log('handleSubmit', e, this.props, this.state.contact)
        if (this.state.contact.name && this.state.contact.mobile) {
            this.props.handleAddCallaback(this.state.contact);
        } else {
            alert('Please Enter Name & Mobile')
        }
    }

    handleClear(e) {
        console.log(e, this.props, this.state.contact)
        this.setState({ contact: { name: '', mobile: '' } });
        this.props.handleResetCallaback()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.contact !== this.props.contact) {
            this.setState({ contact: nextProps.contact });
        }
    }
}

export default Contact
