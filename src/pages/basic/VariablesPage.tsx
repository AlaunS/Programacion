import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const VariablesPage = () => {
    
    const { resetCurrentSelection } = useContext(AppContext);

    return (
        <div className="relative overflow-auto h-full">
            <button onClick={resetCurrentSelection} className="absolute mt-2 py-1 px-6 rounded-lg bg-red-400 font-semibold">Salir</button>
            <h1 className="font-semibold text-2xl text-center mt-2">Variables</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-start px-2 text-sm bg-zinc-500/10 py-1">
                Existen 2 tipos de variables dentro de javascript, las variables de tipo constante
                y las variables dinamicas o let, las variables constantes son aquellas que no pueden cambiar
                es decir si tu les asignas que tendran un 1, no podran cambiar a 2 ni a ningun otro tipo de valor,
                mientras que con las variables dinamicas o let si te permiten cambiar este dato las veces que quieras,
                es recomendable utilizar constantes dentro de tu codigo ya que te permite un mejor rendimiento
                y entendimiento dentro de tu codigo!
            </p>
            <div className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                <p>Reglas de las variables: </p>
                <ul>
                    <li><p className="mb-2"><strong>Variables:</strong> Las variables se declaran con lowerCamelCase, es decir empiezan en minuscula y cada palabra nueva empieza con Mayuscula</p></li>
                    <li><p className="mb-1"><strong>Funciones:</strong> Las funciones se declaran con upperCamelCase, es decir todas las palabras empiezan con mayuscula</p></li>
                </ul>
            </div>
            <hr className="mt-2 mb-1" />
            <h1 className="font-semibold text-2xl text-center mt-2">Usos en codigo</h1>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Constante (Const)</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta variable como mencione anteriormente el dato que le asignemos sera un dato
                    que nunca va a cambiar, normalmente se utiliza por ejemplo para PI, tambien
                    para declaracion de funciones, o para declaracion de objetos, por ejemplo:
                </p>
                <img className="mt-2 border border-zinc-300/10" src="images/Variables1.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Dinamicas (Let)</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta variable como mencione anteriormente el dato que le asignemos sera un dato
                    que lo podremos cambiar en todo momento, se puede ocupar en cualquier momento
                    para funciones u objetos (Aunque no es recomendable), nos da la facilidad de poder
                    saltarnos las reglas de las constantes permitiendonos cambiar todo, pero con el
                    inconveniente de que afecta en parte el rendimiento
                </p>
                <img className="mt-2 border border-zinc-300/10" src="images/Variables2.png" width={500} />
                <hr className="mt-1" />
            </div>
        </div>
    )
}
