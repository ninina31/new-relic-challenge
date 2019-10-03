/**
* @desc Handler for when request finishes
* @param XMLHttpRequest xhr - XMLHttpRequest object to be handled
* @param Function callback - callback function for successfull response
* @return undefined
*/
const onload = (xhr, callback) => () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    callback(JSON.parse(xhr.response))
  } else {
    // Handle error
  }
}

/**
* @desc Requests asynchronously 
* @param string url - url to request
* @param Function callback - callback function for successfull response
* @param string method - request method - default GET
* @return undefined
*/
export default (url, callback, method = 'GET') => {
  const xhr = new XMLHttpRequest()
  xhr.onload = onload(xhr, callback)
  xhr.open(method, url)
  xhr.send()
}
