-- ====================================================================
--                 FIVEM LOADING SCREEN - SERVER HANDOVER
-- ====================================================================

local resourceName = GetCurrentResourceName()

-- Sunucu adı ve bağlanan oyuncu adını NUI arayüzüne aktarır (Opsiyonel Handover)
AddEventHandler('playerConnecting', function(playerName, _, deferrals)
    local serverName = GetConvar('sv_projectName', GetConvar('sv_hostname', 'FiveM Server'))

    deferrals.handover({
        vars = {
            playerName = playerName,
            serverName = serverName,
            resourceName = resourceName -- YouTube aktarma sayfasının adresi için
        }
    })
end)

-- YouTube aktarma sayfası: http://sunucu-adresi/<kaynak-adı>/yt?v=VIDEO_ID
-- YouTube, web adresi olmayan sayfalardan (oyunun nui:// sayfaları) gömülen videoları
-- oynatmadığı için html/yt.html dosyası sunucunun kendi http adresinden yayınlanır.
SetHttpHandler(function(request, response)
    if request.method == 'GET' and request.path:sub(1, 3) == '/yt' then
        local page = LoadResourceFile(resourceName, 'html/yt.html')
        if page then
            response.writeHead(200, {
                ['Content-Type'] = 'text/html; charset=utf-8',
                ['Referrer-Policy'] = 'strict-origin-when-cross-origin',
                ['Cache-Control'] = 'no-store'
            })
            response.send(page)
            return
        end
    end

    response.writeHead(404)
    response.send('Not found')
end)
