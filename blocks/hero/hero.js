export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length >= 2) {
    const imageRow = rows[0];
    const contentRow = rows[1];
    const contentCell = contentRow.querySelector(':scope > div') || contentRow;

    // Check for a video link (anchor pointing to .mp4)
    const videoLink = imageRow.querySelector('a[href$=".mp4"]');
    if (videoLink) {
      const video = document.createElement('video');
      video.className = 'hero-video';
      video.src = videoLink.href;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('aria-hidden', 'true');
      // Keep the poster image if one exists alongside the link
      const img = imageRow.querySelector('img');
      if (img) video.poster = img.src;
      block.replaceChildren(video, contentCell);
    } else {
      // Preserve existing <picture> with its <source> elements; fall back to wrapping bare <img>
      const picture = imageRow.querySelector('picture');
      if (picture) {
        block.replaceChildren(picture, contentCell);
      } else {
        const img = imageRow.querySelector('img');
        if (img) {
          const pic = document.createElement('picture');
          pic.append(img);
          block.replaceChildren(pic, contentCell);
        } else {
          block.replaceChildren(contentCell);
        }
      }
    }
  }

  // Tag pills: eyebrow p and em-wrapped tags
  const contentDiv = block.querySelector(':scope > div');
  if (contentDiv) {
    const firstP = contentDiv.querySelector(':scope > p:first-child');
    if (firstP && !firstP.querySelector('a, img')) firstP.classList.add('tag-pill');
    contentDiv.querySelectorAll('em').forEach((em) => {
      if (!em.querySelector('a')) em.classList.add('tag-pill');
    });
  }
}
