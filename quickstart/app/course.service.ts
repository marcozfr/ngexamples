export class CourseService {
    getCourses() :Object[]{
        return [
            {name : 'Javascript', likes : 0, votes: 0, myVote : 0},
            {name : 'TypeScript', likes : 4 , votes : 4, myVote : 0},
            {name : 'Ruby', likes : 5, votes : 4, myVote : -1}];
    }
}