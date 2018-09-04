import api from '@/services/api';

export default {
    index(){
      return api('songs').get('/');
    },
    post(song){
      return api('songs').post('/',song);
    },
    getSongById(id){
      return api('songs').get(`/${id}`);
    },
    editSongById(song){
      return api('songs').post(`/${song.id}`,song);
    },
    searchSong(value){
      return api('songs').get('/',{
        params:{
          searchKey:value
        }
      })
    }


}
