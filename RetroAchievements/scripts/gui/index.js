// TODO: have a glass of cold water
// Opens up GUI if you use a firework

// Importing functions
import {world, system} from "@minecraft/server" 
import {ActionFormData, ModalFormData} from "@minecraft/server-ui" 
import {login} from "../functions/login"




world.beforeEvents.itemUse.subscribe(data => {
    // Initializing stuff

    let player = data.source

    let pname = player.nameTag

    let title = "§9Retro§6Achievments §rUnofficial"
    
    if (data.itemStack.typeId == "minecraft:firework_rocket") system.run(() => JoinForm(player)) //change to onjoin later
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
.then((r) => {
    if (r.canceled) return;
    if (r.formValues[0] == `test`) {
        if (r.formValues[1] == `test`) {
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





console.warn("GUI index loaded")

