-- ====================================================================
--                 FIVEM LOADING SCREEN - CLIENT CONTROLLER
-- ====================================================================

CreateThread(function()
    -- Oyuncunun adını loading screen NUI arayüzüne aktar
    local playerName = GetPlayerName(PlayerId())
    SendLoadingScreenMessage(json.encode({
        eventName = 'setPlayerName',
        playerName = playerName
    }))

    -- Oyuncu ağ oturumu başlayana kadar bekle
    while not NetworkIsSessionStarted() do
        Wait(100)
    end

    -- NUI arayüzüne yüklemenin tamamlandığını bildir (Fade-out animasyonu için)
    SendLoadingScreenMessage(json.encode({
        eventName = 'finishedLoading',
        customEvent = 'finishedLoading'
    }))

    -- Yumuşak geçiş efektinin tamamlanması için bekle
    Wait(850)

    -- FiveM Loading Screen ve NUI imlecini kapat
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)
