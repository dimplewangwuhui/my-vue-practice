import Fetch from '../http';
export default {
    get_user(data, pageData) {
        return Fetch({
            method: 'get',
            url: '/api/get_user/?username=' + data.username + '&current=' + pageData.current + '&size=' + pageData.size,
        })
    },
    add_user(data) {
        return Fetch({
            method: 'post',
            url: '/api/add_user/',
            data: data
        })
    },
    update_user(data, id) {
        return Fetch({
            method: 'post',
            url: '/api/update_user/' + id,
            data: data
        })
    },
    delete_user (id) {
        return Fetch({
            method: 'post',
            url: '/api/delete_user/' + id,
        })
    },
    multi_delete_user(data){
        return Fetch({
            method: 'post',
            url: '/api/multi_delete_user/',
            data: data
        })
    }
}
