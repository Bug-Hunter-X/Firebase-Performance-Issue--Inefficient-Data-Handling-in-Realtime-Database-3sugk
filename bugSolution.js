The following code demonstrates a more efficient approach using Firebase's batch updates and a more optimized data structure.  Batching updates significantly improves performance, especially with large datasets.

```javascript
// Efficient solution using batch updates
const database = firebase.database();

const writeData = (data) => {
  const updates = {};
  data.forEach(item => {
    updates[`items/${item.id}`] = item;
  });
  database.ref().update(updates);
};
```