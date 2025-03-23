# GitHub 배포 스크립트
Write-Host "GitHub 배포 시작..."

# Git 초기화 (아직 초기화되지 않은 경우)
if (-not (Test-Path .git)) {
    Write-Host "Git 저장소 초기화..."
    git init
}

# 원격 저장소 설정 (이미 설정되어 있지 않은 경우)
$remoteUrl = git remote get-url origin
if (-not $?) {
    Write-Host "원격 저장소 설정..."
    git remote add origin https://github.com/yourusername/cattowel.git
}

# 모든 파일 추가
Write-Host "파일 추가 중..."
git add .

# 변경사항 커밋
Write-Host "변경사항 커밋 중..."
git commit -m "Initial website deployment"

# main 브랜치로 푸시
Write-Host "GitHub에 푸시 중..."
git push -u origin main

Write-Host "GitHub 배포 완료!" 