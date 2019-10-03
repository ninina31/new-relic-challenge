## new-relic-challenge
Frontend technical challenge for New Relic recruitment process

- SPA with Vanilla JS
- Webpack as Module budler
- Jest.js for Unit testing

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
I decided to use linked lists to implement a sorted collection for the applications on each host. Supposing we can add and remove applications from hosts at runtime, it's convenient to have the collection already sorted. The add and remove actions have complexity O(n) where n is the number of applications per host (it adds and removes elements and maintains the array sorted), but when it comes to get the first N elements of the array, the complexity for this task is O(n). When we compare it to arrays, add and remove have complexity O(1) but sorting the array is O(nlog(n)). So in the case we're adding and removing applications from the hosts, in the end it's better to have linked lists :)

Special consideration: linked lists are more efficient to maintain the collection sorted, but consumes more memory (it has to save the chain references). If you prefer to impact performance instead of memory, use arrays.

### Considerations
* Applications don't repeat
* On the index file you can find some working examples on how to use addAppToHosts and removeAppFromHosts
* The function getTopAppsByHost is being used to get the first 5 top applications to do the rendering
* Only classes have tests