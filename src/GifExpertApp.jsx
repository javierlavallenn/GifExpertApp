import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
    // Creamos un array de categorias usando los Hoks (Use State)
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const addCategory = (newCategory) => {
        // Creamos una copia del array categories y agregamos un nuevo valor
        setCategories ([newCategory ,...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}



            <AddCategory
                // setCategories= {setCategories}
                onNewCategory={event => addCategory(event)}
            />


            {/* listado de gif */}
            <ol>

                {/* Usamos el metodo .map, y devolvemos un nuevo valor  */}
                {categories.map(category => {
                    //Cuando iteramos un elemento debemos utilizar la prop key y su valor
                    return <li key={category}> {category} </li>
                })
                }


            </ol>

            {/* gif item */}
        </>
    )
}
