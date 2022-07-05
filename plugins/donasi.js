let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [+62 819-5929-3465]
│ • Telkomsel [+6281273677810]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay : +6281273677810
│ • Ig : https://www.instagram.com/invites/contact/?i=18n050noxcaqr&utm_content=4fkjlpc
    Gc bot : https://chat.whatsapp.com/C6ahuoDnxXh9zbDnw9wYrb
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
