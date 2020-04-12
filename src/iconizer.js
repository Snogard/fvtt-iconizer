import "./costants.js";
import utils from "./utils.js";

async function replaceIcon(item) {
    let path = game.settings.get(modSettingName, "internal-shared-repo");

    //utils.log(options);
    if (!item || !item.name) return item;


    //check default-icon
    if (!item.img || item.img.toLowerCase().indexOf("icons/svg/mystery-man.svg") !== -1) {
        let newIcon = await findIcon(item);
        if (newIcon != null) {
            item.img = newIcon;
        }
    }
}

async function findIcon(item) {
    let name = item.name.toLowerCase().replace(" ", "-");
    let newIcon = path.concat("/", item.type, "/", name, ".png");
    let iconExists = await utils.serverFileExists(newIcon);

    if (iconExists) {
        return newIcon;
    }
    else {
        return null;
    }
}

Hooks.on("preCreateItem", (createData, item) => {
    item = replaceIcon(item);
});