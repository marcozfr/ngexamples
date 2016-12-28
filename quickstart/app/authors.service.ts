export class AuthorsService{
    getAuthors():Object[] {
        return [
            {name : 'Bob Sinclair', starred : true},
            {name : 'Don Joe', starred : false},
            {name : 'Prakash Manoj', starred : false}];
    }
}