import "./costants.js";
import utils from "./utils.js";

// Hooks 
Hooks.on("preUpdateItem",(entity, updates) => {
    processItemHook(updates, entity);
});

Hooks.on("preCreateItem",(entity, updates) => {
    processItemHook(updates, entity);
});


// Functions
function processItemHook(updates, entity) {
    let itemData = {};
    itemData.name = updates.name ? updates.name : entity.data.name;
    itemData.iconPath = updates.img ? updates.img : (entity.data ? entity.data.img : null);
    itemData.type = updates.type ? updates.type : entity.data.type;

    let iconPath = replaceIcon(itemData);

    updates.img = iconPath;

    utils.log("event", updates.img);
}

function replaceIcon(itemData) {

    //utils.log(options);
    if (!itemData) return itemData;

    //todo check custom default-icon

    if (!itemData.iconPath || 
        itemData.iconPath.toLowerCase().indexOf("icons/svg/mystery-man.svg") !== -1 || 
        !utils.serverFileExists(itemData.iconPath)) {
        let newIconPath = findIcon(itemData);
        if (newIconPath != null) {
            return newIconPath;
        }
    }

    return itemData.iconPath;
}

function findIcon(itemData) {
    utils.log("findicon", "start");
    let path = game.settings.get(modSettingName, "internal-shared-repo");
    
    let name = itemData.name.toLowerCase().replace(" ", "-");
    let newIconPath = path.concat("/", itemData.type, "/", name, ".png");
    let iconExists = utils.serverFileExists(newIconPath);

    utils.log("findicon", newIconPath);

    if (iconExists) {
        utils.log("findicon","found");
        return newIconPath;
    }
    else {
        utils.log("findicon","not found");
        return null;
    }
}
