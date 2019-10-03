## new-relic-challenge
Frontend technical challenge for New Relic recruitment process

- SPA with Vanilla JS
- Webpack as Module budler
- Jest.js for unit testing

### Usage

Instalation
```
npm i
```

Generate bundle
```
npm run build
```

Use project with server
```
npm run start
```

Unit testing
```
npm run test
```

### Complexity

The main solution is implemented with arrays as data structures to save applications related to a host.
* Add an element to the application array has complexity O(1) since it's a simple push to the array.
* Remove an element to the application array has complexity O(n) since a `Array.prototype.slice` function is executed and it can go thought all the array
* Get top applications for a host has complexity O(nlog(n)) since before returning the array, it sorts it. I used the `Array.prototype.sort` since each browser uses different implementations, e.x. Chrome uses TimSort (a mix of merge sort and insertion sort) and Firefox uses merge sort (each one of them are stable sorting algorithms)

In the linked-list branch I decided to use linked lists to implement a sorted collection for the applications on each host. Supposing the main function that is going to be executed is to get top apps from hosts, it's convenient to have the collection already sorted. The add and remove actions have complexity O(n) where n is the number of applications per host (it adds and removes elements and maintains the array sorted), but when it comes to get the top elements of the collection, the complexity for this task is O(n). When we compare it to arrays, add and remove have complexity O(1) but sorting the array is O(nlog(n)). So in the case we're getting the top applications regularly, in the end it's better to have linked lists.

Special consideration: linked lists are more efficient to maintain the collection sorted, but consumes more memory (it has to save the chain references). If you prefer to impact performance instead of memory, use arrays.

In theory everything sounds really good, but when it comes with the practice numbers don't lie. As your can see, for arrays it's more efficient to add and remove elements, but when it comes to getting top applications linked lists are slightly better. Why is not a lot better? Arrays are primitive structures and browsers frequently optimize their code, so that's probably why my implementation of linked lists doesn't cut it.

For Arrays:

removeAppFromHosts:
0.123046875
0.1142578125
0.095703125
0.113037109375
0.109375
0.110107421875
0.10205078125
0.099853515625
0.095947265625
0.096923828125

addAppToHosts:
0.0869140625ms
0.078125ms
0.093017578125ms
0.0751953125ms
0.06689453125ms
0.074951171875ms
0.0849609375ms
0.085205078125ms
0.084716796875ms
0.078857421875ms

getTopAppsByHost:
0.29931640625ms
0.350830078125ms
0.344970703125ms
0.338134765625ms
0.310302734375ms
0.323974609375ms
0.323974609375ms
0.322021484375ms
0.35693359375ms
0.698974609375ms

For Linked Lists:

removeAppFromHosts:
3.913818359375ms
3.476318359375ms
5.14208984375ms
3.77490234375ms
6.86181640625ms
4.19091796875ms
3.768310546875ms
4.06298828125ms
4.548583984375ms
3.7919921875ms

addAppToHosts:
0.207275390625ms
0.114990234375ms
0.14794921875ms
0.120849609375ms
0.115966796875ms
0.15478515625ms
0.1611328125ms
0.138916015625ms
0.1181640625ms
0.193115234375ms

getTopAppsByHost:
0.016357421875ms
0.011962890625ms
0.010009765625ms
0.01611328125ms
0.01513671875ms
0.010009765625ms
0.010009765625ms
0.01220703125ms
0.016845703125ms
0.01318359375ms

### Considerations
* Applications don't repeat
* On the index file you can find some working examples on how to use addAppToHosts and removeAppFromHosts
* The function getTopAppsByHost is being used to get the first 5 top applications to do the rendering
* Only classes have tests