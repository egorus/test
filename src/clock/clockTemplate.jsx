import React, { Component } from 'react';
import moment from 'moment';
import tz from 'moment-timezone';

export default class ClockTemplate extends Component{

    getTimeData(date, tz) {
        let time = date.tz(tz);
        let second = time.second() * 6 - 90;
        let minute = time.minute() * 6 - 90;
        let hour = (time.hour() * 30) + minute / 2 - 90;
        console.log(time.hour);
        return {
            second: second,
            minute: minute,
            hour: hour,
            format: time.format('LTS')
        };
    }

    render() {
        let labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let time = this.getTimeData(this.props.date, this.props.tz);
        console.log(time.hour)
        return (
            <div className="clock">
                <h3 className="clock__text">{this.props.tz}</h3>
                <div>
                    <div className="clock__dial">
                        <div className="arrow arrow__second" style={{transform: 'rotate(' + time.second + 'deg)'}}> </div>
                        <div className="arrow arrow__minute" style={{transform: 'rotate(' + time.minute + 'deg)'}}> </div>
                        <div className="arrow arrow__hour " style={{transform: 'rotate(' + time.hour + 'deg)'}}> </div>
                        <div className="clock__labels">
                            {
                                labels.map((number, i) => {
                                    let x = 84*Math.cos(2*i*0.26-1.57) + 'px';
                                    let y = 82*Math.sin(2*i*0.26-1.57) + 'px';
                                    let style = {
                                        transform: 'translate('+ x +',' + y + ')'
                                    };
                                    return <span key={i} className="clock__label" style={style}>{number}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="clock__text">
                    {time.format}
                </div>
            </div>

        );
    }
}
