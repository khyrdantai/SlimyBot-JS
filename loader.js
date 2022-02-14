
class loader {

    channel = null;
    token = null;
    list_of_people = [];

    constructor() {
        const settings = require("settings.json");
        this.list_of_people = require("discord_users.json");

        if (settings != null) {
            this.channel = settings.channel_id;
            this.token = settings.bot_token;
        }

    }
}