# 🎁 Amigo Secreto

Este proyecto es una aplicación web sencilla para gestionar una lista de amigos y seleccionar uno de forma aleatoria, ideal para jugar al "Amigo Secreto".

## 📌 Características
- Añadir amigos a una lista.
- Visualizar los amigos añadidos.
- Sortear un amigo secreto aleatoriamente.
- Interfaz sencilla y atractiva.

## 🛠 Tecnologías utilizadas
- **HTML5**
- **CSS**
- **JavaScript (DOM, eventos y lógica)**

## 🚀 Funcionalidades

### 1. Agregar amigos
- Captura el valor del campo de texto.
- Valida que el nombre no esté vacío.
- Añade el nombre al arreglo `amigos`.
- Limpia el campo de entrada.
- Actualiza la lista visible en pantalla.

### 2. Mostrar lista de amigos
- Limpia la lista antes de mostrar los nuevos elementos.
- Recorre el arreglo `amigos` y crea un `<li>` por cada nombre.
- Inserta los elementos en la lista HTML.

### 3. Sortear amigo secreto
- Valida que haya al menos un amigo en la lista.
- Genera un índice aleatorio usando `Math.random()` y `Math.floor()`.
- Muestra en pantalla el nombre sorteado.


## 🖼️ Vista previa

### Pantalla principal
<img width="1478" height="733" alt="image" src="https://github.com/user-attachments/assets/c4848483-22b2-489d-b36c-ab8d335dcdcc" />


### Sorteo realizado
<img width="1438" height="807" alt="image" src="https://github.com/user-attachments/assets/20ed1905-c1ab-4f4f-a9a1-4fdf3b419f63" />


## 📖 Instrucciones de uso
1. Abre el archivo `index.html` en tu navegador.
2. Escribe un nombre en el campo de texto y presiona **"Añadir"**.
3. Repite el paso anterior para agregar más nombres.
4. Presiona **"Sortear amigo"** para seleccionar aleatoriamente a uno de los nombres agregados.
5. El nombre sorteado se mostrará en pantalla.



