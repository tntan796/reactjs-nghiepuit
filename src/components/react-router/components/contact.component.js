import React, { Component } from 'react';

class ContactComponent extends Component {
    render() {
        console.log('Match:', this.props.match);
        return (
            <div>
                Day la trang Contact
            </div>
        );
    }
}

export default ContactComponent;