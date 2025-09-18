document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.post-content');
  var outline = document.getElementById('post-outline');
  if (!content || !outline) return;
  // Prefer H1 found on the page (title) as the top-level TOC entry.
  var pageTitle = document.querySelector('h1.post-title');
  var headings = Array.prototype.slice.call(content.querySelectorAll('h1, h2, h3, h4'));
  if (pageTitle && !headings.includes(pageTitle)) {
    // Ensure the page title is the first entry
    headings.unshift(pageTitle);
  }
  if (!headings.length) { outline.style.display = 'none'; return; }

  function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/["'<>\(\)\[\]`]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  var ol = document.createElement('ol');
  headings.forEach(function (h, idx) {
    var level = parseInt(h.tagName.substring(1), 10);
    if (!h.id) {
      var id = slugify(h.textContent || h.innerText || 'heading');
      var unique = id;
      var i = 1;
      while (document.getElementById(unique)) { unique = id + '-' + i++; }
      h.id = unique;
    }

    var li = document.createElement('li');
    li.style.margin = '0.25rem 0';
    li.style.listStyle = 'none';

    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
  a.dataset.level = level;
  a.style.display = 'block';
  // If this is the first item and corresponds to the page title, make it top-level (no indent)
  var paddingLevel = (idx === 0) ? 0 : (level - 1);
  a.style.paddingLeft = (paddingLevel) + 'rem';
    a.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(h.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + h.id);
    });

    li.appendChild(a);
    ol.appendChild(li);
  });

  outline.appendChild(ol);

  // Highlight active heading using IntersectionObserver
  var links = Array.from(outline.querySelectorAll('a'));
  var headingMap = {};
  headings.forEach(function (h) { if (h && h.id) headingMap[h.id] = outline.querySelector('a[href="#' + h.id + '"]'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.id;
      var link = headingMap[id];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (ln) { ln.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 });

  headings.forEach(function (h) { if (h) observer.observe(h); });
});
