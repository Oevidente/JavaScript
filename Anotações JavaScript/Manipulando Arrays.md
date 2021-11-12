# Manipulando Arrays

## Ao ser declarado, o **Array traz consigo uma série de métodos para manipulá-lo.**

```jsx
let array =['string', 1, true, ['array'1], ['array2'], ['array3'], ['array4']];
```

- **forEach()** - *itera um array;*
    
    ```jsx
    array.forEach(function(item, index){console.log(item, index)});
    ```
    
- **push()** - *add item no final do array;*
    
    ```jsx
    array.push([ ]);
    console.log(array);
    ```
    
- **pop()** - *remove item no final do array;*
    
    ```jsx
    array.pop();
    console.log(array);
    ```
    
- **shift() -** *remove item no início do array;*
    
    ```jsx
    array.shift();
    console.log(array);
    ```
    
- **unshift()** - *add item no início do array;*
    
    ```jsx
    array.unshift(' novo item no início ');
    console.log(array);
    ```
    
- **indexOf()** - *retorna índice de um valor;*
    
    ```jsx
    console.log(array.**indexOf(true)**);
    ```
    
- **splice()** - *remove ou substitui um item pelo índice;*
    
    ```jsx
    array.splice(0, 3);
    console.log(array);
    ```
    
- **slice()** - *retorna uma parte de um array existente;*
    
    ```jsx
    let novoArray = array.slice(0, 3);
    console.log(novoArray);
    ```