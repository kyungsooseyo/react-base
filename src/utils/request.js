import axios from 'axios'
const server = axios.create({
  baseURL: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4865587',
  timeout: 5000,
  headers:
  {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.2.1","e":"1657867789973531647049729"}',
    'X-Host': ' mall.film-ticket.film.list',
  }

})
export default server