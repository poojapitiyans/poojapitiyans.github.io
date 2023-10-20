# PowerShell Script: Commit-Push.ps1

# Define the commit message
$commitMessage = "Updated assets"

# Step into the Git realm
try {
    # Ensure the local repository is in sync with the remote main branch
    git pull origin main

    # Add all changes to the staging area
    git add .

    # Commit the changes with a message
    git commit -m $commitMessage

    # Push the changes to the remote main branch
    git push origin main

    Write-Host "Successfully committed and pushed the changes to the main branch!" -ForegroundColor Green
}
catch {
    Write-Host "An error occurred: $_" -ForegroundColor Red
}
