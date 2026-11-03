# Oluwumi Oyekanmi · Product Management Portfolio

A static website built with plain HTML, CSS and JavaScript. It needs no build step and no installation, and it runs on GitHub Pages as it is.

## What Is In This Folder

```
index.html                  Homepage
case-studies/               One page per case study
  ghealead.html
  light-nation.html
  tfi-fldc.html
  wale-lab-r2i.html
  _template.html            Starting point for a new case study
assets/css/style.css        All styling (colours, fonts, layout)
assets/js/projects.js       The list of projects shown on the homepage and in the menu
assets/js/site.js           Theme toggle, menus, project cards, screenshot zoom
assets/img/                 Screenshots and card images
```

## Publish On GitHub Pages

1. Sign in at github.com. Create an account if you do not have one.
2. Click **New** to create a repository. Name it `<your-username>.github.io` if you want the site at `https://<your-username>.github.io`. Any other name, such as `portfolio`, puts the site at `https://<your-username>.github.io/portfolio/`. Both work, because every link in the site is relative.
3. Set the repository to **Public** and click **Create Repository**.
4. On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder** (not the folder itself), so that `index.html` sits at the top level. Click **Commit Changes**.
5. Go to **Settings > Pages**. Under **Build And Deployment**, choose **Deploy From A Branch**, select the **main** branch and the **/ (root)** folder, then click **Save**.
6. Wait a minute or two, then refresh the page. GitHub shows the live address at the top of the Pages settings.

## Take Down The Old Portfolio

- **To replace it in the same repository:** delete the old files in that repository, then upload these files instead (step 4 above).
- **To remove it completely:** open the old repository, go to **Settings**, scroll to **Danger Zone** and click **Delete This Repository**. This cannot be undone.
- **To keep the code but take the site offline:** open the old repository, go to **Settings > Pages** and set the source to **None**.

## Add A New Case Study

1. Copy `case-studies/_template.html` and rename the copy, for example `case-studies/new-project.html`.
2. Open `assets/js/projects.js` and copy one project block. Change the values. The `slug` must match the file name without `.html`.
3. Choose the status: `live`, `in-development`, `concept`, `completed` or `archived`.
4. Add a card image at `assets/img/thumbs/<slug>.webp` (800 by 500 pixels works best) and any screenshots in `assets/img/<slug>/`.
5. Fill in the template text and delete any sections the project does not need.
6. Upload the changed files to GitHub. The homepage card and the Case Studies menu update automatically.

## Edit Text

- Homepage text lives in `index.html`.
- Case study text lives in each file in `case-studies/`.
- Card text (title, description, role, status, tags) lives in `assets/js/projects.js`.

You can edit any of these directly on GitHub: open the file, click the pencil icon, make your change and click **Commit Changes**.

## Privacy

The Light Nation, TFI and Wale Lab visuals are recreations built with dummy data. No real names, contact details or records appear on the site. Keep it that way when you add new projects.
