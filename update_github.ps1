# GitHub 업데이트 스크립트
Write-Host "GitHub 업데이트 시작..."

# 변경사항 확인
git status

# 변경된 파일 추가
git add .

# 변경사항 커밋
git commit -m "Update website design and functionality"

# GitHub에 푸시
git push origin main

Write-Host "GitHub 업데이트 완료!" 