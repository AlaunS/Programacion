import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ConsolePage = () => {

    const { resetCurrentSelection } = useContext(AppContext);

    return (
        <div className="relative overflow-auto">
            <button onClick={resetCurrentSelection} className="absolute mt-2 py-1 px-6 rounded-lg bg-red-400 font-semibold">Salir</button>
            <h1 className="font-semibold text-2xl text-center mt-2">Consola</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-start px-2 text-sm bg-zinc-500/10 py-1">
                La consola tiene varios usos en la programacion en Javascript tanto como
                para depurar errores o saber que errores tenemos en nuestro codigo o durante
                la ejecucion, al igual que para imprimir valores necesarios, o datos que no
                conozcamos realmente que es lo que nos va a regresar, puede ser una herramienta
                muy util para checar que todo funcione como deberia.
            </p>
            <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                Para abrir la consola dentro del navegador se puede utilizar la tecla F12,
                al igual que se puede dar click derecho, seleccionar inspeccionar y posteriormente
                la consola
            </p>
            <img className="mt-2 border border-zinc-300/10" src="images/Consola1.png" width={2000} />
            <hr className="mt-2 mb-1" />

            <h1 className="font-semibold text-2xl text-center mt-2">Usos en codigo</h1>
            <h1 className="font-semibold text-lg mt-1 -mb-1">Console.log</h1>
            <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                El console.log nos permite enviar algun texto o numero que queramos imprimir en consola,
                ademas nos permite realizar concatenaciones es decir unir 2 cadenas de texto o numeros,
                estos se unen por medio del simbolo + por ejemplo:
            </p>
            <img className="mt-2 border border-zinc-300/10" src="images/Consola2.png" width={500} />
            <img className="mt-2 border border-zinc-300/10" src="images/Consola3.png" width={500} />
        </div>
    )
}
