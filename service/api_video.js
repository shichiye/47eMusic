import cyRequest from './index'

export function getTopMVs(offset, limit = 10) {
  return cyRequest.get("/top/mv", {
    offset,
    limit
  })
}