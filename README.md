# nggis-ayc

step to deploy to git-pages
1. Create project in same location
2. Install Angular CLI gh-pages:: npm i angular-cli-ghpages --save-dev
3. Run Build : ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/"

correct: ng build --base-href "https://ayc16.github.io/nggis-ayc/"

4. Deploy to gh-pages: npx angular-cli-ghpages --dir=dist/Project-name

correct: npx angular-cli-ghpages --dir=dist/ng-arcgis-core/browser

5. Wait for 2-3 minute
6. Reload https://ayc16.github.io/nggis-ayc/
