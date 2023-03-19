import React from 'react';
import MenuComponent from '../../components/Menu/menuComponent';

const ArrayMenu = [
    {
        name : 'Home',
        ruta : '/home',
        submenu : []
    },
    {
        name : 'Configuracion',
        ruta : '/configuracion',
        submenu : [
            {
                name : 'Usuarios',
                ruta : '/usuarios',
                submenu : []
            }
        ]
    }
]

function menucontainer() {
  return (
    <div>
        <MenuComponent data={ArrayMenu}/>
    </div>
  );
}

export default menucontainer;