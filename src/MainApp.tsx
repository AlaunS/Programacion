import { useContext, useState } from "react"
import { ConsolePage } from "./pages/basic/ConsolePage";
import { DataTypePage } from "./pages/basic/DataTypePage";
import { VariablesPage } from "./pages/basic/VariablesPage";
import { ConditionalPage } from "./pages/basic/ConditionalPage";
import { OperadoresPage } from "./pages/basic/OperadoresPage";
import { DocumentPage } from "./pages/basic/DocumentPage";
import { FunctionsPage } from "./pages/Intermediate/FunctionsPage";
import { ArraysPage } from "./pages/Intermediate/ArraysPage";
import { CiclesPage } from "./pages/Intermediate/CiclesPage";
import { Objects } from "./pages/advanced/Objects";
import { MathPage } from "./pages/advanced/Math";
import { ObjectsArray } from "./pages/advanced/ObjectsArray";
import { HowPage } from "./pages/vue/HowPage";
import { VariablesVuePage } from "./pages/vue/VariablesVuePage";
import { CiclesVuePage } from "./pages/vue/CiclesVuePage";
import { ConditionalVuePage } from "./pages/vue/ConditionalVuePage";
import { MethodsPage } from "./pages/vue/MethodsPage";
import { AppContext } from "./pages/context/AppContext";

export const MainApp = () => {

    const { currentSelection, setCurrentSelection } = useContext(AppContext);
    const SetHTMLSelecion = () => {

        switch(currentSelection){
            case "Consola": return <ConsolePage />
            case "TipoDato": return <DataTypePage />
            case "Variable": return <VariablesPage />
            case "Condicional": return <ConditionalPage />
            case "Operador": return <OperadoresPage />
            case "Document": return <DocumentPage />
            case "Funciones": return <FunctionsPage />
            case "Arreglos": return <ArraysPage />
            case "Ciclos": return <CiclesPage />
            case "Objetos": return <Objects />
            case "Math": return <MathPage />
            case "ArObjetos": return <ObjectsArray />
            case "Como": return <HowPage />
            case "VariablesVue": return <VariablesVuePage />
            case "CiclosVue": return <CiclesVuePage />
            case "CondiVue": return <ConditionalVuePage />
            case "Metodos": return <MethodsPage />
        }
    }

    return (
        <div className="p-3 h-screen text-white bg-zinc-800">
            {
                currentSelection != ''
                ? SetHTMLSelecion()
                : 
                <>
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
                                    <button onClick={() => setCurrentSelection("Consola")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Consola</button>
                                    <button onClick={() => setCurrentSelection("TipoDato")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Tipos de datos</button>
                                    <button onClick={() => setCurrentSelection("Variable")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Variables</button>
                                    <button onClick={() => setCurrentSelection("Condicional")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Condicionales</button>
                                    <button onClick={() => setCurrentSelection("Operador")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Operadores</button>
                                    <button onClick={() => setCurrentSelection("Document")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10">Document</button>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 text-black border-zinc-500/30" />
                        <div className="mt-2">
                            <p className="font-semibold text-lg text-center -mt-1 mb-1">Intermedios</p>
                            <div className="flex w-full justify-center px-1">
                                <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                                    <button onClick={() => setCurrentSelection("Funciones")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Funciones</button>
                                    <button onClick={() => setCurrentSelection("Arreglos")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Arreglos</button>
                                    <button onClick={() => setCurrentSelection("Ciclos")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Ciclos</button>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 text-black border-zinc-500/30" />
                        <div className="mt-2">
                            <p className="font-semibold text-lg text-center -mt-1 mb-1">Avanzados</p>
                            <div className="flex w-full justify-center px-1">
                                <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                                    <button onClick={() => setCurrentSelection("Objetos")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Objetos</button>
                                    <button onClick={() => setCurrentSelection("Math")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Math</button>
                                    <button onClick={() => setCurrentSelection("ArObjetos")} className="bg-zinc-900 font-semibold p-1 text-xs px-2 h-10 w-28">Arreglos Objetos</button>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 text-black border-zinc-500/30" />
                        <br />
                        <div className="mt-2">
                            <p className="font-semibold text-2xl text-center mb-2">Vue</p>
                            <div className="flex w-full justify-center px-1">
                                <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                                    <button onClick={() => setCurrentSelection("Como")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Como crearlo</button>
                                    <button onClick={() => setCurrentSelection("VariablesVue")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Variables</button>
                                    <button onClick={() => setCurrentSelection("CiclosVue")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Ciclos</button>
                                    <button onClick={() => setCurrentSelection("CondiVue")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Condicionales</button>
                                    <button onClick={() => setCurrentSelection("Metodos")} className="bg-zinc-900 font-semibold p-1 text-sm px-2 h-10 w-28">Metodos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="h-[calc(100vh_-_44rem)] flex items-end">Tu puedes hermosa 👀❤</p>
                </>
            }
        </div>
    )
}
