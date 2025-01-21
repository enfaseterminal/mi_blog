<script>
  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('consent-banner').style.display = 'none';
    window.dataLayer.push({'event': 'cookiesAccepted'});
  }

  function showCustomizeOptions() {
    document.getElementById('consent-banner').style.display = 'none';
    document.getElementById('customize-cookies').style.display = 'block';
  }

  function saveCookiePreferences() {
    const analyticsCookies = document.getElementById('analytics-cookies').checked;
    const adsenseCookies = document.getElementById('adsense-cookies').checked;

    localStorage.setItem('analyticsCookies', analyticsCookies);
    localStorage.setItem('adsenseCookies', adsenseCookies);
    localStorage.setItem('cookiesAccepted', 'true');

    document.getElementById('customize-cookies').style.display = 'none';

    window.dataLayer.push({'event': 'cookiePreferencesSaved', 'analyticsCookies': analyticsCookies, 'adsenseCookies': adsenseCookies});
  }

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    document.getElementById('consent-banner').style.display = 'none';
  }
</script>
