import React, { useEffect } from 'react'

const CookiesPolicy = () => {
   useEffect(() => {
      window.scroll(0,0)
    }, [])
  return (
    <div className="container py-5 pb-0">
    <section>
      <main>
        <article className="pt-5">
          <header className="mb-4 pt-md-5 pt-0">
            <h1 className="add_second_heading">Cookies Policy</h1>
          </header>

          <div className="text-body">
            <p><strong>Effective Date:</strong> November 2024<br />
              <strong>Last Updated:</strong> November 14th, 2024
            </p>

            <p>
              HelenBMG LLC (“we,” “our,” or “us”) values your privacy and is committed
              to being transparent about the technologies we use. This Cookies Policy
              explains what cookies are, how we use them, and your choices regarding their use.
            </p>

            <h5 className="mt-4">What Are Cookies?</h5>
            <p>
              Cookies are small text files that are placed on your device (computer, tablet,
              or mobile device) when you visit a website. They help us recognize your device
              and store information about your preferences or past actions to improve your experience on our site.
            </p>

            <h5 className="mt-4">Types of Cookies We Use</h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">
                <strong>Essential Cookies</strong><br />
                These cookies are necessary for the website to function and cannot be switched off.
                They are usually set in response to actions such as logging in, setting privacy preferences,
                or filling out forms.
              </li>
              <li className="list-group-item">
                <strong>Performance Cookies</strong><br />
                These cookies collect information about how visitors use our website, such as which
                pages are most frequently visited. This helps us improve the performance and functionality of our site.
              </li>
              <li className="list-group-item">
                <strong>Functional Cookies</strong><br />
                These cookies allow the website to remember choices you make (such as your username,
                language, or region) and provide enhanced features.
              </li>
              <li className="list-group-item">
                <strong>Targeting/Advertising Cookies</strong><br />
                These cookies track your browsing habits to deliver relevant advertisements. They are set
                by us or third-party advertising partners and help measure the effectiveness of marketing campaigns.
              </li>
              <li className="list-group-item">
                <strong>Analytics Cookies</strong><br />
                These cookies help us understand how users interact with our website by collecting
                information such as page views, time spent on the site, and user navigation patterns.
              </li>
            </ol>

            <h5 className="mt-4">Third-Party Cookies</h5>
            <p>
              We may allow third parties, such as analytics or advertising partners, to set cookies on your device.
              These third parties may use cookies to collect information about your online activities over time and across different websites.
            </p>

            <h5 className="mt-4">Your Choices Regarding Cookies</h5>
            <p>
              You can manage or delete cookies through your browser settings. Below are links to instructions for popular browsers:
            </p>
            <ul className="list-unstyled">
              <li>Google Chrome</li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p>Please note that disabling cookies may affect the functionality of our website.</p>

            <h5 className="mt-4">Updates to This Policy</h5>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in our practices or
              for other operational, legal, or regulatory reasons.
            </p>
          </div>
        </article>
      </main>
    </section>
  </div>
  )
}

export default CookiesPolicy