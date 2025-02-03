// TODO: have a glass of cold water


// Importing functions
import {world, system} from "@minecraft/server" 
import {ActionFormData, ModalFormData} from "@minecraft/server-ui" 



world.beforeEvents.itemUse.subscribe(data => {
    // Initializing stuff

    let player = data.source

    let title = "RetroAchievments Unofficial"
    
    if (data.itemStack.typeId == "minecraft:firework_rocket") system.run(() => main(player))

    // The main GUI
    function main() {
        const form = new ActionFormData()
        .title(title)
        .body(`Welcome ${player.nameTag} to the unofficial beta of the Retro Achievements Achievement set for Minecraft: Bedrock Edition.`)
        .button("Login to Retro Achievements.\n [Click to Open Menu]")
        .button("Stop talking about baller >:c")
        .button("Close")

    // Form Requests
    form.show(player).then(r => {
        if (r.selection == 0) RALogin(player)

        if (r.selection == 1) baller(player)

        if (r.selection == 2) Close(player)


    })
    }

    function RALogin() {
        new ActionFormData()
        .title("RA Login")
        .button("uwu")
        .button("Back")
        .show(player).then(r =>{
            if(r.selection == 0) {
                player.sendMessage("tesstttt")
                player.runCommandAsync("tp @s ~ ~10 ~")
            }
            if(r.selection == 1) {
                player.sendMessage("ono")
                player.runCommandAsync("tp @s ~ ~10 ~")
            }
            if(r.selection == 1) main(player)





        })


    }


})


console.warn("GUI index loaded")