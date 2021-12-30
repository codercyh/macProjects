import yhRequest from './index'
export function getTopMV(offset, limit = 10){
  return yhRequest.get("/top/mv",{
    offset,
    limit
  })
}