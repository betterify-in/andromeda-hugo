---
title: How to update GitHub Repository from two Computers?
description: You have two different computers and you wish to update your GitHub repository from these two different computers. This blog post explains how to achieve that?
date: 2025-09-19T06:44:00.088Z
preview: /images/blog/analysis.jpg
draft: false
tags:
  - Git
  - GitHub
categories:
  - Technology
  - How To
  - GitHub
  - Hugo
image: /images/blog/proud-coder_bivp 1.webp
images: ""
author_info:
  name: Avadhoot Dandekar
  image: images/author/avadhoot_dandekar.svg
type: regular
---

Updating a GitHub repository from two different computers involves a standard Git workflow. Assuming that you have two computers - Computer A and Computer B. Follow the following workflow to effectively update your GitHub repository from both the computers. 

## 1. Initial Setup on Both Computers:
- **Install Git**: Ensure Git is installed on both computers. Git is a version control system. You can install from here [Git](https://git-scm.com/).
- **Configure Git**: Set your user name and email on both machines for proper commit attribution:

```>git config --global user.name "Your Name"``` // Configures your name

```>git config --global user.email "your.email@example.com"``` // Configures your email

- **Clone the Repository**: On each computer, clone the repository from GitHub:

```>git clone https://github.com/USERNAME/REPOSITORY.git``` 

Replace ```USERNAME``` and ```REPOSITORY``` with the appropriate values.

## 2. Workflow for Updating:

- **Work on Computer A:**
  - Make your changes to the files. 
  - Stage the changes:

  ```>git add .```

- Commit the changes with a descriptive message:

```>git commit -m "Description of changes made on Computer A"```

- Push the changes to GitHub:

```>git push origin main```

***Note:*** Replace ```main``` with your branch name if different.

- **Work on Computer B:**

**Pull the latest changes:** Before making any changes on Computer B, ensure you have the updates pushed from Computer A:

```>git pull origin main```

***Note:*** Again, replace ```main``` with your branch name. Make your changes to the files and Stage the changes.

```>git add .```

Commit the changes.

```>git commit -m "Description of changes made on Computer B"```

Push the changes to GitHub.

```>git push origin main```

## 3. Resolving Conflicts (if they occur):

If you make conflicting changes to the same lines of code on both computers before pushing and pulling, Git will notify you of a merge conflict during the ```git pull``` or ```git push``` operation. You will need to manually resolve these conflicts in your text editor, then stage and commit the resolved changes before pushing.

<span class="yellow">By following this push-and-pull workflow, you can effectively keep your GitHub repository synchronized across multiple machines.</span>  