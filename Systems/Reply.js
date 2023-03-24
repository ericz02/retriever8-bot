const { EmbedBuilder, Embed, Emoji } = require("discord.js")

/**
 * 
 * @param {Commandinter} interaction 
 * @param {String} description 
 * @param {Boolean} type 
 */
function Reply (interaction, description, type) {
    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setColor("#0072FF")
                .setDescription(`${description}`)
        ],
        ephermeral: type || true
    })
}

module.exports = Reply