import api from '@/services/api'

export default {
  index(songId,userId){
    return api('bookmarks').get('/',{
      params:{
        songId:songId,
        userId:userId
      }
    })
  },
  post(bookmark){
      return api('bookmarks').post('/',{
        params:bookmark
      });
  },
  delete(bookmarkId){
      return api('bookmarks').delete(`/${bookmarkId}`);
  }

}

