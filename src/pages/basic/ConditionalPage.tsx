import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ConditionalPage = () => {

    const { resetCurrentSelection } = useContext(AppContext);

    return (
        <div className="relative overflow-auto h-full">
            <button onClick={resetCurrentSelection} className="absolute mt-2 py-1 px-6 rounded-lg bg-red-400 font-semibold">Salir</button>
            <h1 className="font-semibold text-2xl text-center mt-2">Condicionales</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-start px-2 text-sm bg-zinc-500/10 py-1">
                Las condicionales dentro de javascript nos permite comprobar ciertos valores, datos o variables,
                existen varios tipos de condicionales, tales como las condicionales simples, multiples o anidadas,
                estas se deben ocupar solo en ciertas ocasiones para un buen entendimiento del programador
            </p>
            <div className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                <p>Hay diversos tipos de condicionales: </p>
                <p className="mb-1"><strong>Condicion simple:</strong> Son aquellas que comprueban solo si se cumple la condicion </p>
                <p className="mb-1"><strong>Condicion multiple:</strong> Son aquellas que comprueban si se cumple la condicion y tambien si no se cumple</p>
                <p className="mb-1"><strong>Switch:</strong> Son aquellas que guardan multiples opciones que resuleven la condicion</p>
                <p className="mb-1"><strong>Terceario:</strong> Es una alternativa inline de una condicion simple</p>
            </div>
            <hr className="mt-2 mb-1" />

            <h1 className="font-semibold text-2xl text-center mt-2">Usos en codigo</h1>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Condicion simple (if)</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de condicion te permite ejecutar una seccion del codigo solo si la condicion que esta entre los parentesis
                    se cumple, de caso contrario no se realizara nada, por ejemplo si quieres comprobar si un nombre tiene tantas letras
                </p>
                <img className="mt-2 border border-zinc-300/10" src="images/DataType1.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Condicion multiple (ifelse | ifelseif)</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de condicion te permite ejecutar una seccion del codigo solo si la condicion que esta entre los parentesis
                    se cumple, de caso contrario se 
                </p>
                <img className="mt-2 border border-zinc-300/10" src="images/DataType1.png" width={500} />
                <hr className="mt-1" />
            </div>
        </div>
    )
}
