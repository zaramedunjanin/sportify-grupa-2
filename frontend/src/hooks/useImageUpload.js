import {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../config/firebaseConfig";
import axios from "axios";
import {baseURL} from "../services/AdminService/adminService";

const useImageUpload = () => {

    const [file, setFile] = useState("");

    const [percent, setPercent] = useState(0);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (values, id,add =false, edit = false) => {

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
                    if (add === true) {
                        console.log(res)
                        values["profile_picture"] = res
                        axios
                            .post(`${baseURL}/tables/users/add/`, values)
                            .catch((error) => {
                                console.log(error.response);
                            });
                    }
                    if (edit === true) {
                        axios
                            .put(`${baseURL}/tables/users/update/${id}/`, values)

                            .catch((error) => {
                                console.log(error.response);
                            });
                    }
                });
            }
        );

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