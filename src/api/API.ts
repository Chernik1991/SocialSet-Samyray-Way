import * as axios from 'axios';

const instance = axios.default.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7e27618f-fea3-4304-add1-6593b556a6bb'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        )
    }
}
export const profileAPI = {
    getProfile(userID: string) {
        return (
            instance.get(`profile/` + userID).then(response => response.data)
        )
    }
}
export const headerAPI = {
    getAuth() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    }
}
export const followAPI = {
    deleteFollow(id:string) {
        return (
            instance.delete(`follow/${id}`).then(response => response.data)
        )
    },
    postFollow(id:string) {
        return (
            instance.post(`follow/${id}`).then(response => response.data)
        )
    }
}