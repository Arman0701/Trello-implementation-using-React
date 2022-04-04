import { useState } from "react";
import getData from "./getData";

export default function checkUser(loginInput, passwordInput) {
    const [checked, setChecked] = useState(null);
    getData("https://624084882aeb48a9af74b006.mockapi.io/profile")
    .then(res => {
        res.forEach(user => {
            if (user.login === loginInput && user.password === passwordInput) {
                setChecked(true);
                return checked;
            }
        });
        throw new Error("Don't match any user!");
    })
}