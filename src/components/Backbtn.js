import React, { Component } from 'react';

export default class Backbtn extends Component {
state = {
          back: 'human_05_male_muscular_system-superficial_muscles_of_left_shoulder_ID',
          trap: "human_05_male_muscular_system-left_trapezius_ID",
          lats: "human_05_male_muscular_system-left_latissimus_dorsi_ID",
          image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv
                    8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAb0SURBVFhH3VhbUFNXFE2nM/3p9LPTfnam7Vfb37Y/7YfyyJNXAalWXoKIoqAUsb
                    4QqMCASq0dyyMJAUudsR3rtLXKIwmPqYKgvIIaVBAQeQRQICRAQnbPvpyb3IRDLMb2wz2zZu7cs/baK/eec/a5Eb20UaOURdWrZ
                    abacjF4A8dRSSNp2v8T9SpZUdNPYeaZB98BTJ/zCuQ0VoeZMYem/7ehVckKmn8ONy+OKpmGWEBu8/lwM+ZSGd8CQPTK1fKAj8mvL
                    tRrglu0GvkYuTbXKiW25uqI+fWY48GZJLmogVqoidpYA2vR0s+OmhLpJzqNvLfpXOhcX+Nem+l2AcwPnYWlMRU4pqqYxdcD1EAt1
                    JzozQdj474lrKWrkBuwNrXBjnqVOFSrlltGu3KIELuAbUgJw6XpzDFvGC5J53JZY1jrcWcuYO16tVhB7bhH7Y9+75PHvTDb/z1Th
                    MfcjVNwfeNGGP/1KHOchfELR7gcc5v3RYW161Qyq7ZE/C615QqtWqbsa9xnZyUKYfrtGHRHRUCbXALzHd5/DAI5yMUc0+/ZTI4Qf
                    U37bPVqeSm15QqtWjE6N3CGmSREf8EuGE5Lg6G0VDAkfQngbV6SMcP2KBhK3UNyUmGgaDebJwA+RTIfR6gtV9SWS2x2UwUzSYju6
                    HCYzs4G66lTYNgcyT1RFg8xcTELerZs4riY0x0TweQJYZuogFqVZInackVNmdjBShBi8UEp97qsxcUcpo8dg/YQGdhH1Ku4eA/Hu
                    B9DuBZisk0mgaWBslVcT5AO5KC2XIGT0zauYibwGDt/GO7GxzoNIu7EboXH6v2ruHjvbly0G9cYF8MtGE+uEOgBvVBbrsDN81kGD
                    YlRMHHokFvR6ZwcuPWFAhymSicPr/HeEzIm5I4fPAi9OG8Fmp7gDKqlc9SWK7QaxZR1pJSZhLB0nyGvTO5WkIeBzLPJy7lOLl5zc
                    8+Dh6+5PVgOFsMPbtpCWEdKAL1QWytx4ULEq3VK6eLypIaZhLh3KAEe7tq5qihiJD0djBlxTq7x61juHos7sDMZ7mVtd9MWwm7SA
                    HpBT9QeWcFl4k/JAWCGlYCYv3Ua2sniMBcVMYvO5OVBm0Lq5ONCms3PZ3JRo00uhfnOtfdQ9IKeqD3cYsS5xoa9iywy4k7qVhjak
                    8IsiJg/cQJaxQFOPl7jPRYXMbg7Be6kRbvVEMLYkLZYp5ZlU3sikb4quGHCkM8kjygzoIfsdzh/WMUQ+LRwUfA5N8MUaz5BhOXkS
                    U5zRJ3pVovHeM9x0FcG66g9kUhXETTo2UWWJyuhrlziwB46V1DALMRj8sgRMGzb5MztiY+EqaNHmVweqInadUrJMtYS1p4dIN1Eo3
                    hI7XFbzMziaLkbyfqIrKYK+VSL2B/MhYXMIjyw9fXnJTtz+79N5u6xuDxQsyXQH08wU1hLWHvhcSnef0rtkU1aKbXaJ9y7AdcTNfL
                    +luAA+1RWFrMID2NCHIz/4tqA8bovMZ7J5YFPuDVUbNNWKgY8T1DY7tATtcctkuW7+tTFp/eLCWGl+Y+ReaCrDNFfi5HcH0jZxSzC
                    A/c26+2zzgJ4fTNEweTyGCBb1t8xgUZ9VUgTzrmV3CpAD+iFeLJTeyLRlbLAD0iDziWvdIhMTjMSuq4k2cmxJ6dxl1/CDbKFsIogs
                    Nd2RoU6zfHojArhugwrB0E0HQ07Nm6uV0rzsBbWxNroAb2gJ2rPPXizZF721yj9P8R7LeGSBWxTrEL9yUkweDptlcHB4lQytoOZg1
                    qoidq1JZKPsJZXU8+K5viAy30J7DmFr9LSs7p1WbrOwM1Q9mtGreZY/z+ovO/RlOz/FdnbHJ6Fxvbvhx7B9uIJHEOOZx7p6Y6mxA1
                    RVN730G8LeK9VJnYvRDbuzogwt0OCJ3Csi3CQK8xtlQaCPibwHSrve/x1XPxmS4CfWzcZy8yEDrIQYI2vP4Rjsgo6NoXA2IEDzjzU
                    aPH3g0sZQW9Qed9DXyF9+/pm8fLw3pXNF1tVZ2QYTNfkMY0JMXX1OHQRLuZgLm7g17aIl+vLN7xF5X2PGqX085bSiNl2st2YSFu7n
                    5QIxsx4piEWjBmxJGc7mA4fhvYgGVwrDZ8lK/YzKu97kJ78zW3tnoWnjYVwKyKIfM1FMb9D1oL9kYr7usPXjRq92pSFunLpASrve+
                    g0QU3YWVjFnweopdcENVB53wMPE94+B9YL1NKqZa7DgK9BDD6Ze7j2d8R6gVqoSeV9D61akd12KXqOP0j4Avyj6MbFaDNqUnnfAz9
                    gdJUKnaEuxeqbySow1O60opbbR9GLiJoq/9d1akVrx+UEy7/5i8QTmNPxZ4IFNVCLyr7YIL/6NV2Fohr/HH8e6Cpk1ahB5V6GEIn+
                    AXkEc91ZrFgGAAAAAElFTkSuQmCC`
}
    render() {
        return (
            
            <div className="btn-group dropdown">
                <button className="btn btn-dark dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.back)}>
                        <img className="button_icon" src={this.state.image} alt=""/>
                        Back  {/* human_05_male_muscular_system-superficial_muscles_of_left_shoulder_ID */}
                </button>
                <div className="dropdown-menu">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.trap, "trap")}> Trapezius </button> 
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.lats, "lats")}> (Latissimus Dorsi </button> 
                </div>
            </div>
        );
    }
}

