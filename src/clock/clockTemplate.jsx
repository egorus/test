import React, { Component } from 'react';
import moment from 'moment';
import tz from 'moment-timezone';

export default class ClockTemplate extends Component{

    getTimeData(date, tz) {
        let time = date.tz(tz);
        let millis = time.millisecond();
        let second = time.second() * 6 + millis * (6 / 1000) - 90;
        let minute = time.minute() * 6 - 90;
        let hour = (time.hour() * 30) + minute / 2 - 90;
        return {
            digitalValue : time.format('LTS'),
            second: second,
            minute: minute,
            hour: hour
        };
    }

    render() {
        let labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let time = this.getTimeData(this.props.date, this.props.tz);
        return (
            <div className="clock">
                <h3 className="clock__text">{this.props.tz}</h3>
                <div>
                    <div className="clock__dial">
                        <div className="arrow arrow__second" style={this.transform(this.rotate(time.second))}></div>
                        <div className="arrow arrow__hour " style={this.transform(this.rotate(time.hour))}></div>
                        <div className="arrow arrow__minute" style={this.transform(this.rotate(time.minute))}></div>
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
                    {time.digitalValue}
                </div>
            </div>

        );
    }
    transform(str) {
        return { transform: str };
    }
    rotate(deg) {
        return 'rotate(' + deg + 'deg)';
    }
}
