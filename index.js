function Verificar () { 
    const tab = document.getElementById("tab") 
    const res = document.getElementById("res") 
    const tabu = document.getElementById("tabu") 

    if (tab.value.length == 0 || (tab.value) < 0) { 
        window.alert('[ERO] Verifique os Dados e Tente Novamente 😣🥱')
         } else {  
            
            let n = Number(tab.value); 
            let c = 1;   

            tabu.innerHTML = ''; 

            while(c <= 10) { 
                const item = document.createElement("option")
                item.text = `${n} * ${c} = ${n * c}` 
                tabu.appendChild(item) 
                c ++;
                res.innerHTML = `Tabuada de ${n} Gerrada com sucesso!👏☝`
            }
    }
}