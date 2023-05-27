import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../config/firebaseConfig";
import {useState} from "react";

const useImageUpdate = () => {

    const [file, setFile] = useState("");
    const [URL, setURL] = useState("")
    const [percent, setPercent] = useState(0);

    const handleImageUpdate = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url)
                    setURL(url)
                });
            }
        );
    }
    return{
        URL,
        handleImageUpdate,
        setFile
    }
};
export default useImageUpdate;