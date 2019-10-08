import React, { Component } from 'react'
import Contact from '../add-edit-contact/Contact'
class ContactList extends Component {

    constructor(props) {
        super(props)
        this.emptyContact = { name: "", mobile: "" };
        this.state = {
            contact: this.emptyContact,
            contactList: [
                { key: 1, name: "Venkat", mobile: '1234567890' },
                { key: 2, name: "Krishna", mobile: '0987654321' },
                { key: 2, name: "John", mobile: '0987654321' },
                { key: 2, name: "Peter", mobile: '0987654321' },
            ]
        }
        this.handleAddCallaback = this.handleAddCallaback.bind(this);
        this.handleResetCallaback = this.handleResetCallaback.bind(this);

        this.handleEditCallaback = this.handleEditCallaback.bind(this);
        this.handleDeleteCallaback = this.handleDeleteCallaback.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Contact List</h3>
                <hr />
                <p><b>Selected Contact:</b> {(this.state.contact.name + '-' + this.state.contact.mobile)}</p>
                <div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contactList.map((e, index) => {
                                    return <ContactListItem key={e.mobile + index} contact={e} index={index} handleEditCallaback={this.handleEditCallaback}
                                        handleDeleteCallaback={this.handleDeleteCallaback} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Contact contact={this.state.contact} handleAddCallaback={this.handleAddCallaback} handleResetCallaback={this.handleResetCallaback} />
            </div >
        )
    }

    handleAddCallaback(contact) {
        console.log('Adding New Contact', contact)

        if (contact.index || contact.index == 0) {
            //Edit Senario
            let arr = [...this.state.contactList]
            arr[contact.index] = contact
            this.setState({
                ...this.state,
                contactList: arr,
                contact: contact
            });
        } else {
            //Add Senario
            this.setState((prevState, props) => ({
                ...prevState,
                contactList: [...prevState.contactList, contact],
                contact: contact
            }));
        }
    }

    handleResetCallaback() {
        this.setState({
            ...this.state,
            contact: this.emptyContact
        });
    }

    handleEditCallaback(contact, index) {
        console.log('Editing the Contact', contact, index)
        contact.index = index;
        this.setState({
            ...this.state,
            contact: contact
        });
    }

    handleDeleteCallaback(contact, index) {
        console.log('Deleting the Contact', contact)

        let arr = [...this.state.contactList]
        arr.splice(index, 1)

        this.setState({
            contactList: arr
        });

        // this.setState((prevState, props) => ({
        //     contactList: arr
        // }));


        //Working Snippet
        // this.state.contactList.splice(0, 1);
        // this.setState(function (state, props) {
        //     return {
        //         contactList: this.state.contactList
        //     };
        // });
    }
}

function ContactListItem(props) {
    console.log('ContactListItem', props)
    const contact = props.contact;
    const index = props.index;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.mobile}</td>
            {/* Explicitily binding the state */}
            <td><button class="btn btn-primary" onClick={handleEditEvent.bind(this, contact)}>Edit</button></td>
            {/* Using arrow function to bind the state */}
            <td><button class="btn btn-danger" onClick={(e) => handleDeleteEvent(contact, e)}>Delete</button></td>
        </tr>
    )

    function handleEditEvent(contact, event) {
        console.log('handleEditEvent', contact, event);
        //this.setState((state) => {contactList: state.contactList.push(contact) })
        props.handleEditCallaback(contact, index)
    }

    function handleDeleteEvent(contact, event) {
        console.log('handleDeleteEvent', contact, event);
        props.handleDeleteCallaback(contact, index)
    }
}

export default ContactList
