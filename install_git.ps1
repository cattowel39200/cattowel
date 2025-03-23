# Git 설치 스크립트
$gitUrl = "https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe"
$installerPath = "$env:TEMP\GitInstaller.exe"

Write-Host "Git 설치 파일을 다운로드합니다..."
Invoke-WebRequest -Uri $gitUrl -OutFile $installerPath

Write-Host "Git을 설치합니다..."
Start-Process -FilePath $installerPath -ArgumentList "/VERYSILENT /NORESTART" -Wait

Write-Host "설치가 완료되었습니다. PowerShell을 다시 시작해주세요." 