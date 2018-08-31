import api from '@/services/api';

export default {
    index(){
      return api('songs').get('/');
    }
}
