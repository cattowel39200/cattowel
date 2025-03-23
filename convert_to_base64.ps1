# 이미지 파일을 Base64로 변환하는 스크립트
param(
    [Parameter(Mandatory=$true)]
    [string]$ImagePath
)

# 이미지 파일이 존재하는지 확인
if (-not (Test-Path $ImagePath)) {
    Write-Host "이미지 파일을 찾을 수 없습니다: $ImagePath"
    exit 1
}

# 이미지를 Base64로 변환
$base64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($ImagePath))

# 결과를 클립보드에 복사
$base64 | Set-Clipboard
Write-Host "Base64 문자열이 클립보드에 복사되었습니다."
Write-Host "이제 HTML 파일의 img 태그 src 속성에 붙여넣으실 수 있습니다." 