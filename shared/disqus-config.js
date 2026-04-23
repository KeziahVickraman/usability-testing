/**
 * Shared Disqus embed configuration
 * Replace YOUR-DISQUS-SHORTNAME with your actual Disqus shortname.
 * Each page sets window.disqusPageConfig before loading this script.
 *
 * Usage on each page:
 *   <div id="disqus_thread"></div>
 *   <script>
 *     window.disqusPageConfig = {
 *       identifier: 'unique-page-id',
 *       url: window.location.href,
 *       title: 'Page Title'
 *     };
 *   </script>
 *   <script src="shared/disqus-config.js"></script>
 */

(function () {
  var cfg = window.disqusPageConfig || {};

  var disqus_config = function () {
    this.page.url      = cfg.url      || window.location.href;
    this.page.identifier = cfg.identifier || window.location.pathname;
    this.page.title    = cfg.title    || document.title;
  };

  var SHORTNAME = 'usability-testing-1';

  // Lazy-load Disqus only when the thread container scrolls into view
  var threadEl = document.getElementById('disqus_thread');
  if (!threadEl) return;

  var loaded = false;

  function loadDisqus() {
    if (loaded) return;
    loaded = true;

    window.disqus_config = disqus_config;

    var d = document, s = d.createElement('script');
    s.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadDisqus();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(threadEl);
  } else {
    // Fallback: load immediately
    loadDisqus();
  }
})();
