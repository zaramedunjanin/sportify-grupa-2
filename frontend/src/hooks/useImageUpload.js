import {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../config/firebaseConfig";
import axios from "axios";
import {baseURL} from "../services/AdminService/adminService";
import {addData, updateData} from "../services/AdminService/useAdminMutator";

const useImageUpload = () => {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (values, id , page, add =false, edit = false) => {
        console.log("Ovdje")
        if(file !== "") {

            const storageRef = ref(storage, `/files/${file.name}`);
            // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
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
                    getDownloadURL(uploadTask.snapshot.ref).then((res) => {
                        if (page === "users")
                            values["profile_picture"] = res
                        else
                            values["venue_picture"] = res
                        if (add === true) {
                            addData(values, page)
                        }
                        if (edit === true) {
                            updateData(values, page)
                        }
                    });
                }
            );
        }
        else{
            if (edit === true) {
                updateData(values, page)
            }
            if(add === true){
                    addData(values, page)
            }

        }
    }
    return{
        file,
        percent,
        setFile,
        setPercent,
        handleChange,
        handleSubmit
    }
}
export default useImageUpload;