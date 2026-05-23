@echo off
echo 🚀 Starting SignLearn...
docker start jenkins
docker compose up -d
echo ✅ SignLearn is running!
echo 🌐 Open http://localhost:3000
pause