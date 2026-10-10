fx_version 'cerulean'
game 'gta5'

author 'Antigravity'
description 'Ultra-Modern, Animated & Fully Configurable FiveM Loading Screen'
version '2.0.0'

lua54 'yes'

client_script 'client/client.lua'
server_script 'server/server.lua'

files {
    'html/**',
}

loadscreen 'html/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
