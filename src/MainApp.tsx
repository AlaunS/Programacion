
export const MainApp = () => {
    return (
        <div className="p-3 h-screen text-white bg-zinc-800">
            <h1 className="font-semibold text-2xl text-center mt-2">Programacion 5to Semestre</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-center text-sm bg-zinc-300/10">
                En esta aplicacion web mi vida te voy a ayudar a que puedas estudiar los temas
                que vimos de programacion de este parcial mi corazon, desde los temas de variables
                que son los mas basicos, condicionales, funciones, ciclos y arreglos, solo dale
                click a los botones de abajo que son los temas a estudiar mi vida, te amo ❤
            </p>
            <hr className="mt-1 mb-0.5" />
            <div className="py-1">
                <p className="font-semibold text-2xl text-center">Temas</p>
                <div>
                    <p className="font-semibold text-lg text-center -mt-1 mb-1">Basicos</p>
                    <div className="flex w-full justify-center px-1">
                        <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Consola</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Tipos de datos</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Variables</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Condicionales</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Operadores</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Document</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-3 text-black border-zinc-500/30" />
                <div className="mt-2">
                    <p className="font-semibold text-lg text-center -mt-1 mb-1">Intermedios</p>
                    <div className="flex w-full justify-center px-1">
                        <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Funciones</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Arreglos</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Ciclos</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-3 text-black border-zinc-500/30" />
                <div className="mt-2">
                    <p className="font-semibold text-lg text-center -mt-1 mb-1">Avanzados</p>
                    <div className="flex w-full justify-center px-1">
                        <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Objetos</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Math</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-xs px-2 h-10 w-28">Arreglos Objetos</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-3 text-black border-zinc-500/30" />
                <br />
                <div className="mt-2">
                    <p className="font-semibold text-2xl text-center mb-2">Ejercicios</p>
                    <div className="flex w-full justify-center px-1">
                        <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Variables</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Condicionales</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Funciones</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Arreglos</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Ciclos</button>
                            <button className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Objetos</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="h-[calc(100vh_-_44rem)] flex items-end">Tu puedes hermosa 👀❤</p>
        </div>
    )
}
