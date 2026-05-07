@echo off
setlocal enabledelayedexpansion
set "BUILD_MODE=standalone"
npx next build
endlocal
exit /b %ERRORLEVEL%
