import {useEffect} from "react";


const useEffectTitle = (title) => {
    useEffect(() => {
        document.title = title;
}, [])
}


export default useEffectTitle