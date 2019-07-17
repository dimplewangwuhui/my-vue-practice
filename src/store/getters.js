const getters = {
    sidebar: state => state.app.sidebar,
    user: state => state.auth.user,
    token: state => state.auth.token,
    AMsg: state => state.auth.AMsg,
    BMsg: state => state.auth.BMsg,
};

export default getters
