import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const DataTypePage = () => {

    const { resetCurrentSelection } = useContext(AppContext);

    return (
        <div className="relative overflow-auto h-full">
            <button onClick={resetCurrentSelection} className="absolute mt-2 py-1 px-6 rounded-lg bg-red-400 font-semibold">Salir</button>
            <h1 className="font-semibold text-2xl text-center mt-2">Tipos de datos</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-start px-2 text-sm bg-zinc-500/10 py-1">
                Hay varios tipos de datos dentro de javascript, los cuales nos permiten asignar
                a variables para poder modificarlas, por ejemplo podemos guardar datos para un
                nombre, para una edad, para una contraseña, para un calculo o incluso para una
                funcion.
            </p>
            <div className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                <p>Hay diversos tipos de datos: </p>
                <p className="mb-1"><strong>Strings:</strong> Son aquellas que guardan texto por ejemplo: "Alan Saul"</p>
                <p className="mb-1"><strong>Number:</strong> Son aquellas que guardan numeros por ejemplo: 1 - 2 - 3</p>
                <p className="mb-1"><strong>Booleano:</strong> Son aquellas que guardan true o false</p>
                <p className="mb-1"><strong>Objeto:</strong> Son aquellas que guardan multiples propiedades</p>
                <p className="mb-1"><strong>Arreglo:</strong> Son aquellas que guardan multiples tipos de datos</p>
            </div>
            <hr className="mt-2 mb-1" />

            <h1 className="font-semibold text-2xl text-center mt-2">Usos en codigo</h1>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">String</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de dato como mencione anteriormente nos permite guardar strings o cadenas de texto
                    independientemente del tamaño que estas contengan, ademas que dentro de estas se puede poner
                    numeros y otros tipos de datos, pero estos se convertiran a texto, (No puedes sumar 1 + 1
                    siendo texto ya que esto lo traducira a "11")
                </p>
                <img className="mt-2 border border-zinc-300/10" src="images/DataType1.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Number</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de dato como mencione anteriormente nos permite guardar numeros ya sea con o sin
                    decimales, este tipo de dato nos permite realizar operaciones matematicas (Por ejemplo aqui
                    si sumamos 1 + 1 si nos dara como resultado 2)
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType2.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Booleano</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de dato como mencione anteriormente nos permite guardar estados falsos o verdaderos,
                    nos ayuda si en nuestra logica hay algun momento donde tendremos que pasar este tipo de datos
                    para verificar por ejemplo si el usuario esta registrado!
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType3.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Objeto</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de dato como mencione anteriormente nos permite guardar propiedades, realmente
                    este es uno de los tipos de informacion mas utiles pero como es un tema mas complejo solo te
                    dare rapidamente la introduccion, imaginate que tienes una persona, las personas tienen nombres
                    y edad, entonces podriamos crear un objeto que guarde en la misma variable los nombres y edades
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType4.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Arreglo</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Este tipo de dato como mencione anteriormente nos permite guardar varios tipos de datos en
                    una misma variable, a diferencia de los objetos estos se ubican por medio de indices empezando
                    en 0, por ejemplo si tenemos un arreglo de comidas de "Hamburguesa", "Platano", "Pizza", Hamburguesa
                    seria la posicion 0 y los demas 1 y 2 respectivamente:
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType5.png" width={500} />
                <hr className="mt-1" />
            </div>
            
            <h1 className="font-semibold text-2xl text-center mt-3">Extra</h1>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Prompt</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta es una funcion la cual nos permite crear una ventana emergente para introducir datos,
                    esta siempre nos va a regresar un string, aunque pongamos numeros, por lo que si trabajamos
                    con numeros tienes que utilizar el parseInt o parseFloat respectivamente, ademas el valor
                    que te regresa prompt siempre tiene que estar dentro de una variable, ejemplo:
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType7.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Alert</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta es una funcion la cual nos permite crear una ventana emergente donde mostraremos
                    un texto, este solo nos mostrara un texto, es decir no podremos introducir ningun tipo
                    de dato en un alert, este tampoco se va a guardar nunca dentro de una variable, ejemplo:
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType8.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Parse Int</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta es una funcion la cual nos permite convertir un texto a un entero, es decir
                    si el texto es el siguiente "1.2342" nos regresara 1 como resultado, la diferencia
                    entre uno y otro es que este ya no tendra las comillas (Ya no es un texto), por lo
                    que se puede utilizar para operaciones aritmeticas (Se pierden los decimales al convertirlo
                    a entero)
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType5.png" width={500} />
                <hr className="mt-1" />
            </div>
            <div>
                <h1 className="font-semibold text-lg mt-1 -mb-1">Parse Float</h1>
                <p className="text-start px-2 text-sm bg-zinc-500/10 mt-2 py-1">
                    Esta es una funcion la cual nos permite convertir un texto a un flotante, es decir
                    si el texto es el siguiente "14.1242" nos regresara 14.1242 como resultado, la diferencia
                    entre uno y otro es que este ya no tendra las comillas (Ya no es un texto), por lo
                    que se puede utilizar para operaciones aritmeticas
                </p>
                <img className="mt-2 border border-zinc-300/10 h-14" src="images/DataType6.png" width={500} />
                <hr className="mt-1" />
            </div>
        </div>
    )
}
