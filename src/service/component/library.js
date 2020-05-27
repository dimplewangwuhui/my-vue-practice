import Fetch from '../../service/http'

export function FnProgress() {
    return Fetch({
        // method: 'post',
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz'
    })
}
