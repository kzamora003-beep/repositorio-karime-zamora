//Inicio del script para el reto de las cajas, DOM JS//

//1.Cuando haga clck en el btn-cajas-titulo se cambiae el titulo de las cajas//

document.getElementById("btn-cajas-titulo").addEventListener("click",()=>
               {
  const titulocajas = document.getElementById("titulo-cajas");
  titulocajas.textContent = "Karime Zamora";
});
                                                             

//2. Cambiar el color de la caja//

document.getElementById("btn-color-cajas").addEventListener("click",()=>
 {
  const cajas =
   document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "#B427F5";
    }
});


//3. Cambiar el color de la  primera caja //

document.getElementById("btn-primera-caja").addEventListener("click",()=>
 {
  const primeracaja =
        document.querySelector(".caja");
  primeracaja.style.backgroundColor = "#ECC5F0";
   
});

//3. Cambiar el cplor al borde de las cajas //
document.getElementById("btn-borde").addEventListener("click",()=>
   {                                                    
 const bordecaja =
      document.querySelectorAll(".caja");
  bordecaja.forEach(caja =>
                     {
          caja.style.border = "6px dotted #D976E3";
            });
       });

// 5. Referencia para agregar las imagenes//
  const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    // Crear un nuevo contenedor para la imagen
    const col = document.createElement('div');
    col.classList.add('col'); // Para usar la rejilla de Bootstrap

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});