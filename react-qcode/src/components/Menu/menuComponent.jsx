import React from 'react'
import { Link } from "react-router-dom";

function MenuComponente({ data }) {
  return (
    <div>
      {Array.isArray(data) && data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {Array.isArray(item.submenu) && item.submenu.length > 0 && (
                <>
                  <Link to={item.ruta}>{item.name}</Link>
                  <MenuComponente data={item.submenu} />
                </>
              )}
              {Array.isArray(item.submenu) && item.submenu.length === 0 && (
                <Link to={item.ruta}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default  MenuComponente;