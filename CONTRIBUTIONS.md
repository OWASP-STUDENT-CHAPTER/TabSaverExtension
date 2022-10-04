# CONTRIBUTIONS

<aside>
☝ When contributing to this repository, please first discuss the changes you wish to make via issue, email, or any other method with the owners of this repository before making a change.

</aside>

## How to Contribute to the Project?

1. Fork this repository.
    
    When you’re on the main page for the repository, you’ll see a button to "Star" and “Fork” the repository on your upper right-hand side of the page, underneath your user icon.
    
2. Clone the repository to your local machine.
    
    You can alternatively copy the URL by using the green “Clone or download” button from your repository page that you just forked from the original repository page. Once you click the button, you’ll be able to copy the URL by clicking the binder button next to the URL. 
    
    ```bash
    git clone "<repository link>"
    ```
    
3. Create a branch.
    
    To create your branch, from your terminal window, change your directory so that you are working in the directory of the repository. Be sure to use the actual name of the repository to change into that directory.
    
    ```bash
    git checkout -b <branch-name>
    ```
    
4. Make your changes. 
    
    Checkout the issues for the project to contribute to the project. New ideas from your side are also welcome😊.
    
5. Commit and push
    
    ```bash
    git add .
    git commit -m "<commit description>" 
    #check [this](https://www.notion.so/CONTRIBUTIONS-be61e21937394af69af5c963fa5689c6) for making commits
    git push origin <branch name>
    ```
    
    The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is. Additionally, commit messages provide a historical record of the changes for the project at large, helping future contributors along the way. Thus, you must ensure that you write a meaningful commit message.
    
6. Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo).

<aside>
✌️ Wait for your PR review and merge approval!
**Star this repository** if you had fun!

</aside>

### Updating Local Repository

While working on a project alongside other contributors, it is important for you to keep your local repository up-to-date with the project as you don’t want to make a pull request for code that will cause conflicts. To keep your local copy of the code base updated, you’ll need to sync changes.

1. Configure remote for the fork.
    
    You’ll have to specify a new remote upstream repository for us to sync with the fork. This will be the original repository that you forked from. you’ll have to do this with the git remote add command.
    
    ```bash
    git remote add upstream <original repo link>
    ```
    
2. Sync the Fork.
    
    Once you have configured a remote that references the upstream and original repository on GitHub, you are ready to sync your fork of the repository to keep it up-to-date.
    
    ```bash
    git fetch upstream
    ```
    
    Switch to the local master branch of our repository. 
    Now merge any changes that were made in the original repository’s master branch, that you will access through your local upstream/master branch, with your local master branch.
    
    ```bash
    git checkout master
    git merge upstream/master
    ```
    

## Making Commits

- Write clear meaningful git [commit messages](http://chris.beams.io/posts/git-commit/).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- If you're making very, very small changes to your PR (such as making some minor style corrections or minor changes requested by reviewers), make sure you [squeeze](https://davidwalsh.name/squash-commits-git) your commits afterwards, so you don't have an absurd number of commits for a very small fix.
- If you are submitting a PR for a UI-related topic, it would be really awesome if you could add a screenshot of your change or a link to a deployment where it can be tested along with your PR. This makes it very easy for reviewers and you will also get reviews faster.
- *design related