import { useState } from "react"

let lastId = 0;
export const useId = () => {

    const getNewid = ():string => {
        lastId++;
        return ''+lastId;
    }

    return {
        getNewid
    }
}