import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID FV-GM9VDWgieZio8ufreCS3HQtEeJy0VOjMaMpfe4aY'

  }
});
