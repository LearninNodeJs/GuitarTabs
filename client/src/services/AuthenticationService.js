import api from '@/services/api';

export default {
  register(credentials){
    return api('user').post('/register',credentials);
  },
  login(credentials){
    return api('user').post('/login',credentials);
  }
}
