
export const getAllData = async function(url) {
    try{
        const res = await fetch(url)
        return await res.json()
    }catch(error){
        console.log(`Fetching Error :${error}`)
    }
}

export const getSpeicificData = async function getMember(url,id) {
    try{
        const res = await fetch(`${url}/${id}`)
        return await res.json()
    }catch(error){
        console.log(`Fetching Error :${error}`)
    }
}

export const postData = async function(url,data){
    try{
        await fetch(url,{method:"POST",body:JSON.stringify(data)})
    }catch(error){
        console.log(Error(`Error While Posting :${error}`))
    }
}

export const putData = async function(url,id,data){
    try{
        await fetch(`${url}/${id}`,{method:"PUT",body:JSON.stringify(data)})
    }catch(error){
        console.log(Error(`Error While Posting :${error}`))
    }
}

export const deleteSpecificData = async function(url,id){
    try{
        await fetch(`${url}/${id}`,{method:'DELETE'})
        
    }catch(error){
        console.log(Error(`Deleting Error :${error}`))
    }
}
