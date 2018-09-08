import axios from 'axios';

export default (module) => {

  switch(module){
    case 'user':
      return axios.create({
        baseURL:'https://guitarserver.herokuapp.com/user/'
      });

    case 'songs':
      return axios.create({
        baseURL:'https://guitarserver.herokuapp.com/songs/'
      });

    case 'bookmarks':
      return axios.create({
        baseURL:'https://guitarserver.herokuapp.com/bookmarks'
      });
    case 'history':
      return axios.create({
        baseURL:'https://guitarserver.herokuapp.com/history'
      });
    default:
      return axios.create({
        baseURL:'https://guitarserver.herokuapp.com/user/'
      });
  }
};

