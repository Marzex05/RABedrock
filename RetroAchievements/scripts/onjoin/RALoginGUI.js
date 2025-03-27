import {world} from "@minecraft/server"
import {ActionFormData, ModalFormData} from "@minecraft/server-ui"
import {wait} from "../functions/index.js"
import "../gui/index.js"
import {login} from "../functions/login.js"

var totalPlayers = 0


world.afterEvents.playerSpawn.subscribe(async ({player, initialSpawn}) => {
    if (!initialSpawn) return
    totalPlayers += 1

    console.warn("GUI Script Initialized")
    console.warn(`${totalPlayers} Total Player(s) Online`)
    player.sendMessage(`${totalPlayers} Total Player(s) Online`)


    await wait(100)
    JoinForm(player)
})

    

    

function JoinForm(player) {
    new ActionFormData()
    .title(`§9Retro§6Achievments §rUnofficial`)
    .body(`Welcome to the unofficial beta of the §9Retro §6Achievements §rAchievement set for §aMinecraft Bedrock Edition§r! To start earning RA achievements, you must §llog into your RA account.`)
    .button(`Login to §9 Retro §6 Achievements§r.`)
    .button("Info.")
    .button("§lClose")

// Form Requests
.show(player).then(({selection, canceled}) => {
    if (canceled) return JoinForm(player);
    switch (selection) {
        case 1: player.sendMessage("fwesfesjfsd"); break;
        case 0: RALogin(player); break;
    }
}).catch((error) => console.error("Form error:", error)); //  Catch errors to debug
}

function RALogin(player) {
let RAForm = new ModalFormData()
RAForm.title("RA Login")
RAForm.textField(`Log in to the script playground via RA Test Account`, "Username")
RAForm.textField(``, "Password")
.show(player)
.then((loginForm) => {
    if (loginForm.canceled) return;
    let loginUser = loginForm.formValues[0]
    let loginPass = loginForm.formValues[1]
    try {
        login(loginUser, loginPass)


    }
    catch (error) {
        console.warn(error)
        runCommandAsync(`say ${error}`)


    }
    if (loginForm.formValues[0] == `test`) {
        if (loginForm.formValues[1] == `test`) {
            try {
                console.warn("value pass")
            } catch (e) {
                player.runCommandAsync("give @s minecraft:firework_rocket");
            }



        }
        else{
            RAError(player)
    
    
        }
    }
    else{
        RAError(player)


    }


})
.catch((error) => console.error("Login form error:", error)); //  Catch errors for debugging
}


function RAError(player) {
new ActionFormData()
.title(`RA Login`)
.body(`Either an error has occured or you have entered incorrect login information. Please log in again.`)
.button("§lRetry")

// Form Requests
.show(player).then(({selection, canceled}) => {
if (canceled) return JoinForm(player);
switch (selection) {
    case 0: RALogin(player); break;
}
}).catch((error) => console.error("Error form error:", error)); //  Catch errors to debug
}
