import { useMemo } from "react";
import styled from "styled-components"

const StyledMarker = styled.span`
background-color: yellow;
font-weight: bolder;
border-radius: 2px;
`

const StyledItem = styled.a`
color:black;
display:block;
padding:10px;
border:none;
text-decoration:none;
cursor: pointer;
&:hover{
    background-color: #4c91ba;
    color: white;
}
&:hover span{
    color: black;
}`
const MarkedItem = ({ item, query, onClick }) => {

    //a la funcion getPosition necesito memorizarla para guardar su valor con el hook useMemo
    const { left, center, rigth } = useMemo(() => getPosition(item, query), [item, query])


    //funcion para marcar nuestro elemento
    function getPosition(item, query) {
        //esto me dira a partir de que posicion de mi texto esta la coincidencia que estoy mostrando
        const index = item.title.toLowerCase().indexOf(query);
        //ahora divido la longitud de mi texto en 3 partes (divido el texto para poder obtener las posiciones de las coincidencias de mi query)
        const left = item.title.slice(0, index);
        const rigth = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);

        return {
            left, center, rigth
        }

    }

    function handleClick(){
        onClick(item);
    }
    return (
        <StyledItem onClick={handleClick}>
            {left}
            <StyledMarker>{center}</StyledMarker>
            {rigth}
        </StyledItem>
    );
};

export default MarkedItem;