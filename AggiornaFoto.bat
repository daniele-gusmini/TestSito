@echo off
cd %~dp0
git add .
git commit -m "Automatic commit"
git push
pause