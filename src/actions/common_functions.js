/* Orange Copyright restricted MVP */

// Get the range of dates of the Current WEEK based on Current DAY! Starting from Monday...
Date.prototype.toIsoString = function() {
    let tzo = -this.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            let norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };        
    return this.getFullYear() +
        '-' + pad(this.getMonth() + 1) +
        '-' + pad(this.getDate()) +
        'T' + pad(this.getHours()) +
        ':' + pad(this.getMinutes()) +
        ':' + pad(this.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
    };
export function getWeek(){
    let date = new Date(), y = date.getDay();
    if (y===1){                                           //MONDAY
        return new Date().toIsoString().slice(0,10);
    } else if(y===2){                                     //Tuesday
        return new Date(Date.now() - 864e5).toIsoString().slice(0,10);
    } else if(y===3){                                     //WEDNESDAY
        return new Date(Date.now() - 1728e5).toIsoString().slice(0,10);
    } else if(y===4){                                     //THURSDAY
        return new Date(Date.now() - 2592e5).toIsoString().slice(0,10);
    } else if(y===5){                                     //FRIDAY
        return new Date(Date.now() - 3456e5).toIsoString().slice(0,10);
    } else if(y===6){                                     //SATURDAY
        return new Date(Date.now() - 4320e5).toIsoString().slice(0,10);
    } else if(y===0){                                     //SUNDAY
        return new Date(Date.now() - 5186e5).toIsoString().slice(0,10);
    }        
};
// Get the First Date of the Current month. Eg: 2019-06-01   //TIMEZONE included
export function getMonth(){
    let date = new Date(), y = date.getFullYear(), m = ('0' + (date.getMonth() + 1)).slice(-2);
    return `${y}-${m}-01`;
};
//UNIX Timestamp of Yesterday starting from 6am for Safety widget6 threshold
export function getYtdTimeStamp(){
    let date = new Date(), 
    dt = new Date(date.setDate(date.getDate() - 1 )),
    y = dt.getFullYear(), 
    m = ('0' + (dt.getMonth() + 1)).slice(-2), 
    d = ('0' +  dt.getDate()).slice(-2);
    return `${y}-${m}-${d} 06:00:00`;
};

export function todayDate(){
    return new Date().toIsoString().slice(0,10);
};
// Get yesterday's date
export function yesterdayDate(){
    return new Date(Date.now() - 864e5).toIsoString().slice(0,10);
};
// Get tomorrow's date
export function tomorrowDate (){
    return new Date(Date.now() + 864e5).toIsoString().slice(0,10);
};
// Get past 3days' date
export function ThreeDaysDate(){
    return new Date(Date.now() - 2592e5).toIsoString().slice(0,10);
};
// Get past 7days' date
export function SevenDaysDate (){
    return new Date(Date.now() - 6048e5).toIsoString().slice(0,10);
};
// Get past 30 days' date
export function ThirtyDaysDate(){
    return new Date(Date.now() - 2592e6).toIsoString().slice(0,10);
};

export function past14DaysDate(){
    let dt = new Date(Date.now() - 12096e5),
    y = dt.getFullYear(), 
    m = ('0' + (dt.getMonth() + 1)).slice(-2), 
    d = ('0' +  dt.getDate()).slice(-2);
    return `${y}-${m}-${d}T00:00:00`;
};

export function getToday(){
    let dt = new Date(), 
    y = dt.getFullYear(), 
    m = ('0' + (dt.getMonth() + 1)).slice(-2), 
    d = ('0' +  dt.getDate()).slice(-2);
    return `${y}-${m}-${d}T00:00:00`;
};
