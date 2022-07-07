let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • smaftren Ooredoo [0881036447529]
│ • Dana [0881036447529]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/DheoID
│ • Gopay [0881036447529]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
