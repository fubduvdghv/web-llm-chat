@echo off
setlocal enabledelayedexpansion
set "BUILD_MODE=export"
npx next dev
endlocal
exit /b %ERRORLEVEL%
