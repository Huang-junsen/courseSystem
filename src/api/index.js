import Network from './network';

export const getCourse = ()=>Network.get('/news');
export const createCourse = (data)=>Network.post('/news',data);
export const deleteCourse = (id)=>Network.delete(`/news/${id}`);
export const editorCourse = (id,data)=>Network.put(`/news/${id}`,data);
