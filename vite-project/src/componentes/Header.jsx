import { ColorApp } from "./ColorApp"

export function Header({colorApp, coloresAzules, setColorApp}){

    console.log(ColorApp)
    console.log('Render Home')
    return(
        <div className="border p-3 bg-red-200">
            Header
            <ColorApp coloresAzules={coloresAzules} colorApp={colorApp} setColorApp={setColorApp}/>
         </div>
    )
}