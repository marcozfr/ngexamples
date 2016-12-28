export class TweetsService {
    getTweets() :Object[]{
        return [
            {name : 'Timothy Clark', handle : '@tclark', likes : 10, img : 'http://lorempixel.com/100/100/people/?6',
                tweet :'Looking for a better company reporting or docgen app', date : new Date(2016,3,4)},
            {name : 'Rick Grimes', handle : '@thegrimes' , likes : 10, img : 'http://lorempixel.com/100/100/people/?3',
                tweet :'Right Relevance: Influencers, Articles and Conversations', date : new Date(2016,12,1)},
            {name : 'Lori Benson', handle : '@lori', likes : 0, img : null,
                tweet : '10 Reasons why web projects fail', date : new Date(2016,1,1)},
            {name : 'Merle Dixon', handle : '@thedixon', likes : 34, img : 'http://lorempixel.com/100/100/people/?2',
                tweet : 'Christmas tree'}];
    }
}