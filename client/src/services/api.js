import axios from 'axios';

export default (module) => {

  switch(module){
    case 'user':
      return axios.create({
        baseURL:'http://localhost:3000/user/'
      });

    case 'songs':
      return axios.create({
        baseURL:'http://localhost:3000/songs/'
      });

    case 'bookmarks':
      return axios.create({
        baseURL:'http://localhost:3000/bookmarks'
      });
    case 'history':
      return axios.create({
        baseURL:'http://localhost:3000/history'
      })
    default:
      return axios.create({
        baseURL:'http://localhost:3000/user/'
      });
  }
};

