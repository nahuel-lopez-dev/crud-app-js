

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error('No implementado');
}

const loadPreviousPage = async() => {
    throw new Error('No implementado');
}

const onUserChanged = async() => {
    throw new Error('No implementado');
}

const reloadPage = async() => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrenPage: () => state.currentPage,
}