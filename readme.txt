FIRST TIME USE
1 ) install node => https://nodejs.org/en/
2 ) install parcel globally => npm install -g parcel-bundler
3 ) install firebase globally => npm install -g firebase-tools
4 ) change readmd.md file

LATER ON
1 ) in package.json => change name (no spaces)
2 ) npm install (to create the node-modules folder)
3 ) npm run dev => to start server and compile everything
4 ) npm run build => to build app 
5 ) firebase login
6 ) firebase init (make sure you only set the 'build' as public)
7 ) npm run deploy ( or 'firebase deploy' )
8 ) git flow init

--- microprojects
1- create github repo && push first commit
2- create npm repo and config personal data by: 
   npm set init-auhtor-name 
   npm set init-author-email 
   npm set init-author-url
   npm set init-license = MIT

   create package.json 
   npm init == agree to all 
3- create .gitignore and iclude node_modules in it. ==> push
4- publish your project on npm by : npm publish 
   -- to check info : npm info "your project name"
5-  create tag by: git tag 1.0.0 
    git push --tags 
    you could create with specefic tag release description
6- releasing a new version of npm by : 1.x.0
   while x is feature number, 0 is bug number, 1 is new release
   make the update and then commit to github
   npm publish  
7- publich bete version for library by: 1.0.0-beta-0   
   do the same as 6 but with publish:
   npm publish --tag beta
8- add unit testing with mocha and chai:    
    npm i -D mocha chai
    mocha test.js -w in package.json
9- semantic-release 
-- npm i -g semantic-release-cli
-- semantic-release-cli setup ==> follow instructions:: choose travis.cli
-- "semantic-release": "semantic-release pre && npm publish && semantic-release post"
10-add commitizen , cz-conventional-chnagelog
   create script: commit: git-cz ==> follow instructions
11- add test single== test:single: mocha src/test.js
    add test:single to travis.yml   
12- add ghooks to check before pushing to github
    npm i -D ghooks   
13- add nyc for coverage code 
    npm i -D nyc  
    config nyc in pck.json by: 
    nyc mocha src/index.test.js  
    add to yml       
14- add codecov
    npm i -D codecov.io
    
        