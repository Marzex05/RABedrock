export function login(username, password) {
    try {
        if (loginForm.formValues[0] == `test`){
            if (loginForm.formValues[1] == `test`) {
                console.log("pass")

                

            }
        }



        else {
            console.errror("USERINFO INCORRECT")


        }
        
    }
    catch (error) {
        console.error(`Error at login.js: ${error}`)


    }


}
