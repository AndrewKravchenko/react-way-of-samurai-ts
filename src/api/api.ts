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
        // return axios.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`,
        //     {
        //         withCredentials: true
        //     })
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
export const userUnfollowAPI = {
    delete: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const userFollowAPI = {
    post: (id: number) => {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    }
}

export const authMe = {
    get: () => {
        // return axios.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`,
        //     {
        //         withCredentials: true
        //     })
        return instance.get(`/auth/me`)
            .then(response => response.data)
    }
}