import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleRefForm=e=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
    useEffect(()=>{
        emailRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleRefForm}>
                <input ref={nameRef} type="text" /> <br />
                <input ref={emailRef} type="email" name="" id="" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;