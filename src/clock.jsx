import React, { Component } from 'react';
import moment from 'moment';
import './styles.css';
import ClockTemplate from './clockTemplate.jsx';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            tz: ['America/Los_Angeles', 'Australia/Sydney', "Europe/London", 'Asia/Tokyo']
        }
    }

    componentDidMount() {
        this.start();
    }

    start() {
        var self = this;
        (function tick() {
            self.setState({ date: moment() });
            requestAnimationFrame(tick);
        })();
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
