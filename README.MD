# [BACK](https://github.com/bonnysid/lessons-branches/tree/main)
# GITHUB LESSONS

## Commands:
- **git config --global user.name <name>** - set your name
- **git config --global user.email <email>** - set your email
- **git init** - initialize your app
- **git add <_filename_>** - add file(s) to commit
- **git rm --cached <_filename_>** - remove file only from .git
- **git commit -m <_message_>** - commit some changes
- **git push** - push commit and file to remote repo
- **git brunch** - show your branch
- **git brunch <_name of branch_>** - create new branch
- **git brunch -D <_name of branch_>** - delete the branch
- **git checkout <_name of branch_>** - switch the branch
- **git checkout -b <_name of branch_>** - create the new branch and switch to her
- **git merge <_name of branch_>** - merge a current branch with selected branch
- **git add remote <_name repo_> <_url_>** - add remote repo
- **-u** - save data remote repo 
- **-m** - message
## .gitignore
- **file.exe** - exclude file
- **/folder** - exclude folder
- ***.html** - exclude all files with .html
- **!foo.html** - don't ignore this file
- **/bar/\*\*.\*.js** - exclude all js files in folder bar
- **/\*.rar** - exclude all files with .rar in root folder
## Commit examples
- **init:** - используется для начала проекта/таска. Примеры:
```
init: start youtube-task
init: start mentor-dashboard tas
```
- **feat:** - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта). Примеры:
```
feat: add basic page layout
feat: implement search box
feat: implement request to youtube API
feat: implement swipe for horizontal list
feat: add additional navigation button
feat: add banner
feat: add social links
feat: add physical security section
feat: add real social icons
```
- **fix:** - исправил ошибку в ранее реализованной функциональности. Примеры:
```
fix: implement correct loading data from youtube
fix: change layout for video items to fix bugs
fix: relayout header for firefox
fix: adjust social links for mobile
```
- **refactor:** - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности.
```
refactor: change structure of the project
refactor: rename vars for better readability
refactor: apply eslint
refactor: apply prettier
```
- **docs:** - используется при работе с документацией/readme проекта. Примеры:
docs: update readme with additional information
docs: update description of run() method