"use strict";
/*
The Park Service has just inherited two parks: Wolf Point Park and Raccoon Meadows. Each park has a volunteer program where volunteers help maintain the parks by cleaning campsites, planning educational events, and maintaining hiking trails.

The Park Service would like to combine their volunteers and introduce a volunteer appreciation program, where the top volunteers get a special edition park badge for their service. It’s your job to help complete a program that was partially written by a colleague to help the Park Service determine this season’s top volunteers.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const racoon_meadows_log_1 = require("./racoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    const volunteersMap = volunteers.map((volunteer) => {
        let id = volunteer.id;
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities,
        };
    });
    return volunteersMap;
}
function isVerified(verified) {
    if (typeof verified === "string") {
        return verified === "Yes" ? true : false;
    }
    return verified;
}
function getHours(activity) {
    if ("hours" in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours = hours + getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
function byHours(a, b) {
    return b.hours - a.hours;
}
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, racoon_meadows_log_1.raccoonMeadowsVolunteers));
// console.log(combinedVolunteers);
const result = calculateHours(combinedVolunteers);
// console.log(result);
console.log(result.sort(byHours));
