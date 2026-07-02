---
title: "A new home for the lab notebook"
date: 2026-01-15
tags: [meta, perception]
excerpt: "Why I moved off Google Sites, and how this blog works — push a markdown file, get a post."
---

This is the first entry in the rebuilt site. I moved off Google Sites for one
reason: I wanted writing to be as low-friction as committing code. Now a new post
is just a markdown file pushed to the repo — no editor, no lock-in, full version
history.

## How posting works

Drop a file in `_posts/` named `YYYY-MM-DD-some-title.md`, give it a little front
matter, write in markdown, and push. GitHub Pages rebuilds the site automatically.

```yaml
---
title: "Your post title"
date: 2026-02-01
tags: [robotics, depth]
excerpt: "One line that shows up in the blog index."
---
```

Everything below the front matter is the post body. The usual markdown works:

- **bold** and *italic*
- `inline code`
- [links](https://github.com/ashwin-ned)
- lists, quotes, and fenced code blocks with syntax highlighting

> Perception is inference under uncertainty — the trick is acting well anyway.

### Code reads cleanly in both themes

```python
def reproject(points, K, pose):
    """Project 3D points into the camera given intrinsics K and a pose."""
    cam = pose @ to_homogeneous(points)
    uv = K @ cam[:3]
    return uv[:2] / uv[2]
```

That's it. The next entries will be actual research notes — for now, the pipeline
works end to end.
