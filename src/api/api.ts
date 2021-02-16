import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "bdcd7774-e172-45f7-88a2-0d88a8171b02"
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (userId: number) => {
        return instance.post(`/follow/${userId}`, {})
            .then(response => response.data)
    },
    unfollow: (userId: number) => {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
    getProfile: (userId: number) => {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`/profile/` + userId)
            .then(response => response.data)
    },
    getStatus: (userId: number) => {
        return instance.get(`/profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus: (status: string) => {
        return instance.put(`/profile/status`, {status})
            .then(response => response.data)
    }
}
export const authAPI = {
    me () {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    login (email: string, password: string, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout () {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}