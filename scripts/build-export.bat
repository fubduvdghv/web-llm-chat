@echo off
setlocal enabledelayedexpansion
set "BUILD_MODE=export"
npx next build
endlocal
exit /b %ERRORLEVEL%
