# GitHub 저장소에 파일을 업로드하는 스크립트
param(
    [Parameter(Mandatory=$true)]
    [string]$RepositoryUrl,
    [Parameter(Mandatory=$true)]
    [string]$Branch = "main"
)

# Git이 설치되어 있는지 확인
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git이 설치되어 있지 않습니다. Git을 설치해주세요."
    exit 1
}

# 현재 디렉토리를 Git 저장소로 초기화
git init

# 원격 저장소 추가
git remote add origin $RepositoryUrl

# 모든 파일 스테이징
git add .

# 변경사항 커밋
git commit -m "Initial commit"

# 메인 브랜치로 푸시
git push -u origin $Branch

Write-Host "파일이 성공적으로 GitHub에 업로드되었습니다."
Write-Host "GitHub Pages 설정을 완료하시면 웹사이트가 배포됩니다." 