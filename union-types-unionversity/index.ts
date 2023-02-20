/*
Education has finally reached its pinnacle with the establishment of a new-wave educational institution named Unionversity. At Unionversity, learners join together and combine their knowledge to gain a higher understanding of the world around them. While it’s changing the way we think about learning, Unionversity does have one interesting requirement: all students must write a type-safe program that enrolls them in their own courses and study groups.

This program must be able to search courses and study groups from a list, enroll in them, and print a list of currently enrolled events. Let’s test our skills of TypeScript to get enrolled. As we say at Unionversity, “ts-c you in class”!
*/

import courses from './courses'
import studyGroups from './studyGroups'

type Course = {
  id: number,
  studyGroupId: number,
  title: string,
  keywords: string[],
  eventType: string,
}

type StudyGroup = {
  id: number,
  courseId: number,
  title: string,
  keywords: string[],
  eventType: string,
}

type SearchEventOptions = {
  query: string | number,
  eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventOptions) {

  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

  return events.filter((event: (Course | StudyGroup)) => {
    if (typeof options.query === 'number') {
        return event.id === options.query;
      }

    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
      }
    });
}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
  // enrolledEvents = [...enrolledEvents, event]
}

const searchResults = searchEvents({
  query: 'art',
  eventType: 'courses'
  });

console.log(searchResults);

enroll({
    id: 1,
    studyGroupId: 1,
    title: 'Improvisational Arts Lab',
    keywords: [ 'improv', 'art', 'performance', 'lab' ],
    eventType: 'course'
  });

  console.log(enrolledEvents);
