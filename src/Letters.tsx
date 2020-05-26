import React from 'react';
import moment from "moment";

interface Props {
    now: moment.Moment,
    end: moment.Moment
}

const Letters = (props: Props) => {
    const fullString = "VAKÁCIÓ!";
    let stringToWrite="";
    const timeBetween: moment.Duration = moment.duration(props.end.diff(props.now))

    if (timeBetween.days() <= fullString.length){
        stringToWrite = fullString.slice(timeBetween.days());
        console.log(fullString.length - timeBetween.days());
    }

    return (
        <div className="letters">
            {stringToWrite}
        </div>
    );
};

export default Letters;