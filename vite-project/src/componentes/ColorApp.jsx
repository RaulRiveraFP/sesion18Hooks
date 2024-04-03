export function ColorApp({coloresAzules, setColorApp, colorApp}){
    
    function manejadorSelect(e){
        console.log(e.target.value)
        setColorApp(e.target.value)
    }
    return(
        <select onChange={(e)=> manejadorSelect(e)}>
          {
            coloresAzules.map((color, key)=>{
              return(
                <option key={key} value={color}>{color}</option>
              )
            })
          }
        </select>
    )
}