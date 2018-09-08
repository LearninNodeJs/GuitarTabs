import api from '@/services/api';

export default {
  index(userId){
    return api('history').get('/',{
      params:{
        userId:userId
      }
    })
  },
  post(history){
    return api('history').post('/',history);
  }

}
