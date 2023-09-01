local MarketplaceService = game:GetService("MarketplaceService")

script.Parent.Touched:Connect(function(hit)
    if hit.Parent:FindFirstChild("Humanoid") then -- If the part detects a humanoid then
        local plr = game.Players:GetPlayerFromCharacter(hit.Parent)
        MarketplaceService:PromptPremiumPurchase(plr)
    end
end)
