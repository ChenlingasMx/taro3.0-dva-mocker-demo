import HTTPREQUEST from "./http"

export const getList = (data) => {
  return HTTPREQUEST.post('/api/get/list', data)
}