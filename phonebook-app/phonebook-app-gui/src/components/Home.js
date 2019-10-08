import React from 'react'
import ContactList from './contact-list/ContactList'

function Home() {
    return (
        <div>

            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">KVK Phonebook App</a>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <ContactList />
                </div >
            </div >
        </div>
    )
}

export default Home;
