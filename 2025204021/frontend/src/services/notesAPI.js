import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/notes';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const notesAPI = {
  getAllNotes: () => api.get('/'),
  createNote: (note) => api.post('/', note),
  updateNote: (id, note) => api.put(`/${id}`, note),
  deleteNote: (id) => api.delete(`/${id}`),
  getNumberOfNotes: () => api.get('/number'),
};