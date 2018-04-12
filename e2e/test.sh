
rm -rf temp/
mkdir temp
cd temp

yo polymer-typescript --name your-app
cd your-app
npm run test
cd ..

yo polymer-typescript:material --name your-material
cd your-material
npm run test
cd ..

yo polymer-typescript:module --name your-module
cd your-module
npm run test
cd ..

