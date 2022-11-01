## Pull Requests

# Pull Request Guidelines

Before we merge a pull request, we make sure it follows these guidelines:
* **Make A Branch:** Please make a new branch for each issue you're working on. 
    `git checkout -b branch-name`
- Please provide `meaningful commit notes` and [rebase your branch](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) `git rebase pre-dev` before submitting your pull request.
- Someone may also request that you [squash your commitments](https://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html). This is used to "clean up" your pull request prior to merging it.
- Describe how you put your change to the test.(we don’t want commits such as fix tests, fix 2, fix 3, etc.).
- You must include a description in your GitHub pull request that provides background information and/or justifies its creation.
- Tests ought to be included in the pull request.
- Push your branch to GitHub using the command `git push your-username branch-name` or `git push` if you have already pushed the branch to GitHub
- The documentation needs to be updated if the pull request adds functionality.
- Make a PR to main on your GitHub fork.
- Fill out the PR template.
- Participate in the PR threads to communicate with the repo's designated maintainers.
- Your PR will be merged as soon as all changes have been approved.



***note***
- It is acceptable to open incomplete or work-in-progress PRs if you require assistance or comments from the developers. On GitHub, you can label these as `draft pull requests`.
- Instead of adding new commits to remedy something, please consider changing your first commit(s) to maintain the history clean when upgrading your PR. You can accomplish this by utilizing
    ```
    git commit --amend --no-edit
    git push [your-remote-repo] [your-branch] --force-with-lease
    ```


### Incorporating feedback
* If your PR gets a 'Changes requested' review, you will need to address the feedback and update your PR by pushing to the same branch. You don't need to close the PR and open a new one.
* Be sure to re-request review once you have made changes after a code review.
* By requesting a re-review, you can demonstrate that you have made the desired modifications and that you are now waiting on the maintainers rather than the other way around.



### Code guidelines
* Create thorough and reliable tests that account for the changes you've made to your work.
* Observe the relevant coding conventions for the language and framework you're using (e.g. PEP 8 for Python).
* Keep functions short and modular, and give variables descriptive names, to write legible code.
* Completely document your code.
* Verify that all the current tests are successful.
* The following browsers should be supported by user-facing code:
    * Webkit-Blink and 22+ in Chrome
    * Gecko version 28+ of Firefox
    * Edge (12+) (based on Chrome)
    * Opera (12.1+; Chrome-Blink)
    * Safari (7+ and Apple's Webkit)
    * IE 11 (Trident) (Trident) 


 


