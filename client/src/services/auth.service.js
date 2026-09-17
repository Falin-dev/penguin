const login = async (username,password)=>{
    const fetchLogin = await fetch("http://localhost:3000/auth/login", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username:username, password:password
        })
    });

    const result = await fetchLogin.json();
    if(fetchLogin.status==200){
        return result;
    }
    else{
        throw new Error(result.cause || result.error);
    }
}

const register = async (username, name, password, email, dob) => {
    const fetchRegister = await fetch("http://localhost:3000/auth/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            name: name,
            password: password,
            email: email,
            dob: dob
        })
    });

    const result = await fetchRegister.json();
    if(fetchRegister.status === 201 || fetchRegister.status === 200){
        return result;
    }
    else {
        throw new Error(result.cause || result.error || "Registration failed");
    }
}

export { login, register }