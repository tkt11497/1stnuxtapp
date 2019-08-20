import Vuex from 'vuex'
import axios from 'axios'
import auth from '../middleware/auth'
import Cookie from 'js-cookie'
const createstore = () => {
    return new Vuex.Store({

        state: {
            loadedpost: [],
            token: null,
        },
        mutations: {
            setpost(state, post) {
                state.loadedpost = post
            },
            addpost(state, post) {
                state.loadedpost.push(post)
            },
            update(state, updatedpost) {
                const postindex = state.loadedpost.findIndex(
                    post => post.id === updatedpost.id
                );


                state.loadedpost[postindex] = updatedpost

            },
            delete(state, updatedpost) {
                const postindex = state.loadedpost.findIndex(
                    post => post.id === updatedpost.id
                );


                state.loadedpost.splice(postindex, 1)
            },
            settoken(state, data) {
                state.token = data
            },
            cleartoken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexcontext, context) {

                return axios.get("https://nuxt-blog-51bcc.firebaseio.com/posts.json")
                    .then((res) => {
                        const postarray = []
                        for (const key in res.data) {
                            postarray.push({...res.data[key], id: key })
                        }
                        vuexcontext.commit('setpost', postarray)
                    })
                    .catch((e) => { context.error(e) })
            },
            setpost(vuexcontext, post) {
                vuexcontext.commit('setpost', post)
            },
            addpost(vuexcontext, post) {
                return axios.post('https://nuxt-blog-51bcc.firebaseio.com/posts.json?auth=' + vuexcontext.state.token, post).then(
                    (result) => {
                        vuexcontext.commit('addpost', {...post, id: result.data.name })
                    }
                ).catch((err) => console.log(err))
            },
            update(vuexcontext, post) {
                return axios.put('https://nuxt-blog-51bcc.firebaseio.com/posts/' + post.id + '.json?auth=' + vuexcontext.state.token, post)
                    .then(
                        (result) => { vuexcontext.commit('update', post) }
                    )
                    .catch((err) => console.log(err));

            },
            delete(vuexcontext, post) {
                return axios.delete('https://nuxt-blog-51bcc.firebaseio.com/posts/' + post.id + '.json?auth=' + vuexcontext.state.token)
                    .then(
                        (result) => { vuexcontext.commit('delete', post) }
                    )
            },
            authmethod(vuexcontext, authdata) {
                let authurl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
                if (!authdata.isLogin) {
                    authurl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
                }
                return axios.post(authurl + process.env.fbapikey, {
                        email: authdata.email,
                        password: authdata.password,
                        returnSecureToken: true
                    }).then((result) => {
                        vuexcontext.commit('settoken', result.data.idToken)

                        if (process.client) {
                            localStorage.setItem('token', result.data.idToken)
                            localStorage.setItem('expiretime', new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
                        }

                        Cookie.set('ctoken', result.data.idToken)
                        Cookie.set('cexpiretime', new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
                    })
                    .catch((err) => { console.log(err.response.data.error.message) })

            },
            reloadauth(vuexcontext, req) {
                let token;
                let timer;
                if (req) {
                    console.log('runing server')
                    if (!req.headers.cookie) {
                        return;
                    }
                    let jscookie = req.headers.cookie.split(";") //it works here
                        .find((c) => { return c.trim().startsWith("ctoken=") });
                    console.log(jscookie)
                    if (!jscookie) {
                        return
                    }
                    token = jscookie.split('=')[1];
                    timer = req.headers.cookie.split(";")
                        .find(c => c.trim().startsWith("cexpiretime="))
                        .split("=")[1];
                } else {
                    console.log("running local")
                    token = localStorage.getItem('token')
                    timer = localStorage.getItem('expiretime')

                }
                console.log(new Date().getTime(), +timer)
                if (new Date().getTime() > +timer || !token) {
                    console.log('no token or invalidtoken')
                    vuexcontext.dispatch('logout')
                    return;
                }

                console.log("running reloadauth")
                vuexcontext.commit('settoken', token)

            },
            logout(vuexcontext) {
                vuexcontext.commit('cleartoken')
                localStorage.removeItem('token')
                localStorage.removeItem('expiretime')
                Cookie.remove('ctoken')
                Cookie.remove('cexpiretime')
            }



        },
        getters: {
            loadedpost(state) {
                return state.loadedpost
            },
            authenticated(state) {
                return state.token != null;
            }
        }




    })
}
export default createstore