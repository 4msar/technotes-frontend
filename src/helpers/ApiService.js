import axios from './axios';

const ApiService = {
    login: (mail) => axios.post('/auth', { mail }),

    getNotes: () => axios.get('/note?page=1&size=10'),
    getNote: (id) => axios.get(`/note/${id}`),
    addNote: (data) => axios.post(`/note`, data),
    updateNote: (id, data) => axios.put(`/note/${id}`, data),
    deleteNote: (id) => axios.delete(`/note/${id}`),

    getSharedNotes: () => axios.get('/note/share'),
    shareNote: (data) => axios.post('/note/share', data),
    editSharedNote: (id, data) => axios.put(`note/share/${id}`, { data }),
    notesSharedByMe: () => axios.get('/note/user/shared-by-me'),
};

export default ApiService;
