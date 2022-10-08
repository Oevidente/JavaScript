# Operadores aritméticos

- Adição: `+`
- Subtração: `-`
- Multiplicação: `*`
- Divisão Inteira: `/`
- Resto de divisão: `%`
- Potenciação: `**`

---

### Precedência matemática dos operadores

1. `( )`
2. `**`
3. `*  /  %`
4. `+  -`

---

### Simplificando operações

- `n = n + 4` ⇒ **`n += 4`**
- `n = n - 5` ⇒ **`n -= 5`**
- `n = n * 4` ⇒ **`n *= 4`**
- `n = n / 2` ⇒ **`n /= 2`**
- `n = n ** 2` ⇒ **`n **= 2`**
- `n = n % 5` ⇒ **`n %= 5`**

---

### Operadores de Incremento

- `n++` ⇒ **`n + 1`**
- `n--` ⇒ **`n - 1`**

---

### Operadores Relacionais

- Maior que
`>`
- Menor que
`<`
- Maior igual à
`>=`
- Menor igual à
`<=`
- Igual à 
`==`
*dois iguais compara o valor somente*
`===`
*três iguais compara também o tipo do valor*
- Diferente de
`!=`
*um igual compara o valor somente*
`!==`
dois *iguais compara também o tipo do valor*

---

### Operadores Lógicos e suas precedências respectivamente

- Negação
`!`
**Operador unário = só tem um operando
Retorna apenas `true` ou `false`**
- Conjunção - e
`&&`
**Operador binário = tem dois valores lógicos
Retorna `true` apenas se as duas condições forem atendidas**
- Disjunção - ou
`||`
**Operador binário = tem dois valores lógicos
Retorna `true` quando uma das condições for atendida**

---

### Precedência dos operadores

1. **Operadores Aritméticos**
2. **Operadores Relacionais**
3. **Operadores Lógicos**
    
    `var a = 5`
    
    `var b = 8`
    
    `a > b && b % 2 == 0`
    
    1. `b % 2` ⇒ `0`
    2. `b % 2 == 0` ⇒ `true`
    3. `a > b` ⇒ `false`
    4. `false && true` ⇒ `false`
    
    `a <= b || b / 2 == 2`
    
    1. `b / 2` ⇒ `4`
    2. `b / 2 == 2` ⇒ `false`
    3. `a <= b` ⇒ `true`
    4. `true || false` ⇒ `true`
    
    ---
    

### Operadores Ternários

- ?
- :

`teste ? true : false`

`média >= 7 ? "Aprovado" : "Reprovado"`

*Se a condição for atendida escreva Aprovado caso contrário escreva Reprovado*

---