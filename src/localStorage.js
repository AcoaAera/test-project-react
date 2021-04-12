const USERS = 'USER'

export const pushUsersToLocalstorage = (users) => {
    localStorage.setItem(USERS, JSON.stringify(users))
}

export const getUsersToLocalstorage = () => {
    return JSON.parse(localStorage.getItem(USERS))
}