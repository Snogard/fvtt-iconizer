import "./costants.js";

function registerSettings()
{
    game.settings.register(modSettingName,"cloud-shared-repo",
    {
        name: "Shared Cloud Storage",
        hint: "tbd",
        default: "",
        type: String,
        scope: "world",
        config: true,
    })

    game.settings.register(modSettingName,"internal-shared-repo",
    {
        name: "Shared Internal Storage",
        hint: "tbd",
        default: "assets/shared",
        type: Azzu.SettingsTypes.DirectoryPicker,
        scope: "world",
        config: true,
    })

    game.settings.register(modSettingName,"cloud-world-repo",
    {
        name: "World Cloud Storage",
        hint: "tbd",
        default: "",
        type: String,
        scope: "world",
        config: true,
    })

    game.settings.register(modSettingName,"internal-world-repo",
    {
        name: "World Internal Storage",
        hint: "tbd",
        default: "",
        type: Azzu.SettingsTypes.DirectoryPicker,
        scope: "world",
        config: true,
    })
}