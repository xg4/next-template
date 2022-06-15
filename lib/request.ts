import ky from 'ky-universal'

export const request = ky.extend({
  prefixUrl: process.env.API_URL,
})
