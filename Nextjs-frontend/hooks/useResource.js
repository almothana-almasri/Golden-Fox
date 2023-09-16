import { useAuth } from "context/auth";
import { useState } from "react";
import useSWR from 'swr'
import { useEffect } from "react";





export default function useResource(restOfURL = '') {

    const [token, setToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            
            let token_pef = localStorage.getItem('token')
            // console.log(11111,token_pef)

            setToken(JSON.parse(localStorage.getItem('token')))

            // console.log(token)
        }
    }, []);


    const url = process.env.NEXT_PUBLIC_API_RESOURCE_URL+restOfURL
    
    
    // const [data, setDate]= useState([]);
    // const { token, logout } = useAuth();
    const { data, error,mutate } = useSWR([url,token], fetchResource)


    function config() {
        return {
            headers: {
                 "Content-Type": "application/json",
                 "Authorization":"Bearer " + token.access
         },


        }
    }

    async function fetchResource() {
        if (!token) {
            return
        }
        try {
            const response = await fetch(url, config())
            const jsonResponse  = await response.json()
            // console.log(1111,jsonResponse)
            // setDate(jsonResponse)
            return jsonResponse


        } catch (error) {
            errorHandler(error)
        }

    }
    
    async function createResource(newLocation){

        if (!token) {
            return
        }try{

            const options =config()
            options.method ="POST"
            options.body  = JSON.stringify(newLocation)
            console.log(111111,options)
            await fetch(url, options )
            mutate()

        }catch (error) {
            errorHandler(error)
        }


    }
    async function deleteResource(id){

        const deleteUrl =url+id
        if (!token) {
            return
        }try{

            const options =config()
            options.method ="DELETE"
    
            await fetch(deleteUrl, options )
            mutate()

        }catch (error) {
            errorHandler(error)
        }


    }

    async function updateResource(newLocation,id){

        const updateUrl =url+id+"/"
        if (!token) {
            return
        }try{

            const options =config()
            options.method ="put"
            options.body  = JSON.stringify(newLocation)
    
            await fetch(updateUrl, options)
            mutate()

        }catch (error) {
            errorHandler(error)
        }


    }




    function errorHandler(error) {
        console.log(error);
        logout()

    }





    return {
        response : data,
        createResource,
        deleteResource,
        fetchResource,
        updateResource
    }



}

