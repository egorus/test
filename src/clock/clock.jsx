import React, { Component } from 'react';
import moment from 'moment';
import '../styles/styles.css';
import ClockTemplate from './clockTemplate.jsx';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment(),
            tz: ['Europe/Kiev', 'Australia/Sydney', 'Europe/London', 'Asia/Tokyo']
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: moment()
            })
        }, 1000);
    }

    render() {
        return (
            <div className="clocks">
                {
                    this.state.tz.map((tz, i) => {
                        return <ClockTemplate key={i} date={ this.state.date } tz={tz}></ClockTemplate>
                    })
                }
            </div>
        );
    }
}
