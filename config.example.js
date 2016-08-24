//----- Config
	module.exports = {
    token: "discord_bot_token",
    use_mongodb: true,
    osu_api: "osu_api_key",
    osu_irc_enabled: false,           //optional disabled by default
    osu_irc_username: "irc_username", //optional
    osu_irc_password: "irc_password", //optional
    osu_api_url: "https://ripple.moe/api/",    //optional: defaults to the official osu api url. Will still use the official osu api for beatmap info.

    superadmins: [
        "discord_user_id"
    ]
};