
export const MainApp = () => {
    return (
        <div className="p-3 h-screen text-white bg-zinc-800">
            <h1 className="font-semibold text-2xl text-center">Programacion 5to Semestre</h1>
            <hr className="mt-2 mb-1" />
            <p className="text-center text-sm bg-zinc-300/10">
                En esta aplicacion web mi vida te voy a ayudar a que puedas estudiar los temas
                que vimos de programacion de este parcial mi corazon, desde los temas de variables
                que son los mas basicos, condicionales, funciones, ciclos y arreglos, solo dale
                click a los botones de abajo que son los temas a estudiar mi vida, te amo ❤
            </p>
            <hr className="mt-1 mb-0.5" />
            <div className="flex w-full justify-center px-1 py-2 gap-x-2">
                <button className="bg-zinc-900 font-semibold p-1 w-24 h-10">Arreglos</button>
                <button className="bg-zinc-900 font-semibold p-1 w-24 h-10">Vue</button>
            </div>
        </div>
    )
}
