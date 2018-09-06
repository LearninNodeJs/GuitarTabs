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
  post(songId,userId){
      return api('bookmarks').post('/',{
          params:{
            songId:songId,
            userId:userId
          }
      });
  },
  delete(bookmarkId){
      return api('bookmarks').delete(`/${bookmarkId}`);
  }

}

