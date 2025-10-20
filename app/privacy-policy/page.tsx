import { StickyNav } from "@/components/sticky-nav"
import { Footer } from "@/components/footer"
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNav />

      <div className="py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto" data-hero-section>
        {/* Privacy Policy Section */}
        <section className="mb-16">
          <h1 className={`${anton.className} text-5xl md:text-6xl mb-8`}>PRIVACY POLICY</h1>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              At Ecolionhousing.co.uk, we are committed to protecting your privacy and personal information. We value
              your trust and want to ensure that you are aware of how we collect, use, and safeguard your data. This
              Privacy Policy outlines our practices regarding the Collection and Use of Personal Information. We collect
              personal information from you when you fill out our application forms or when you contact us through our
              website or other communication channels. The personal information we collect may include your name,
              address, contact details, date of birth, and other relevant information necessary to assess your
              eligibility for our services and to stay with us.
            </p>
            <p>
              Sharing of Personal Information: We do not share your personal information with any third-party
              organizations or individuals, except where required by law or with your explicit consent. We may share
              your information with our staff members and authorized personnel who require it to provide you with the
              services you require during your stay with us.
            </p>
            <p>
              Retention of Personal Information: We retain your personal information for as long as necessary to fulfill
              the purposes for which it was collected and to comply with legal and regulatory requirements. Once your
              information is no longer needed, we will securely dispose of it.
            </p>
            <p>
              Security of Personal Information: We take appropriate measures to safeguard your personal information and
              protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard
              security protocols and technologies to ensure the confidentiality and integrity of your data. However,
              please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p>
              Your Rights: You have the right to request access to, rectification or erasure of your personal
              information held by us. You also have the right to object to or restrict the processing of your personal
              information and to request data portability. To exercise any of these rights, please contact us using the
              contact details provided at the end of this Privacy Policy. If exercising your rights, we will respond to
              your request within a reasonable timeframe.
            </p>
            <p>
              Changes to this Privacy Policy: We reserve the right to modify this privacy policy at any time, so please
              review it frequently. Changes and clarifications will take effect immediately upon their posting on the
              website.
            </p>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our use of your personal
              information, please contact us at enquiries@ecolionhousing.co.uk
            </p>
          </div>
        </section>

        {/* Cookie Policy Section */}
        <section className="mb-16">
          <h2 className={`${anton.className} text-4xl md:text-5xl mb-8`}>COOKIE POLICY</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p className="font-semibold">Last updated: 04/04/2023</p>
            <p>
              This Cookie Policy explains how Ecolion Housing Limited ("we", "us", or "our") uses cookies and similar
              technologies to recognize you when you visit our website at www.ecolionhousing.co.uk ("Website"). It
              explains what these technologies are and why we use them, as well as your rights to control our use of
              them.
            </p>

            <h3 className="font-semibold text-lg mt-6">What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Ecolion Housing) are called "first-party cookies". Cookies
              set by parties other than the website owner are called "third-party cookies". Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics). The parties that set these third-party cookies can recognize your
              computer both when it visits the website in question and also when it visits certain other websites.
            </p>

            <h3 className="font-semibold text-lg mt-6">Why do we use cookies?</h3>
            <p>
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons
              for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other
              cookies enable us to track and target the interests of our users to enhance the experience on our Website.
              Third parties serve cookies through our Website for advertising, analytics, and other purposes.
            </p>

            <h3 className="font-semibold text-lg mt-6">We use cookies to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve your browsing experience</li>
              <li>Analyze site performance</li>
              <li>Understand how you use our Website</li>
              <li>Provide personalized content and services</li>
              <li>Advertise to you on other websites</li>
              <li>Monitor and analyze the performance, operation, and effectiveness of our Website and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6">What types of cookies do we use?</h3>
            <p>The cookies we use fall into the following categories:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services
                available through our Website and to use some of its features, such as access to secure areas. Because
                these cookies are strictly necessary to deliver the Website to you, you cannot refuse them without
                impacting how our Website functions. You can block or delete them by changing your browser settings, as
                described below under the heading "How can I control cookies?"
              </li>
              <li>
                <strong>Analytics and customization cookies:</strong> These cookies collect information that is used
                either in aggregate form to help us understand how our Website is being used or how effective our
                marketing campaigns are, or to help us customize our Website and application for you in order to enhance
                your experience.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-6">How can you control cookies?</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually modify your browser
              setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to access
              some interactive features of our Website.
            </p>
            <p>You can learn more about cookies by visiting the following third-party websites:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All About Cookies (allaboutcookies.org)</li>
              <li>About.com Browser Guide</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6">Updates to this policy</h3>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Therefore, we encourage you to review this Cookie Policy
              periodically to stay informed about our use of cookies and similar technologies. If we make material
              changes to this Cookie Policy, we will notify you through our Website or by other means.
            </p>
          </div>
        </section>

        {/* Imprint Section */}
        <section className="mb-16">
          <h2 className={`${anton.className} text-4xl md:text-5xl mb-8`}>IMPRINT</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>Ecolion Supported Housing Ltd</p>
            <p>Address: 214 Wicklemarsh Road, London, England, SE3 8DN</p>
            <p>Phone: 07852079636</p>
            <p>Email: enquiries@ecolionhousing.co.uk</p>
            <p>Managing Director: OLI, Nwabueze Nonso</p>
            <p>Registered Office: 214 Wicklemarsh Road, London, England, SE3 8DN</p>
            <p>Registration Number: 14611612</p>
            <p>VAT Identification Number:</p>
            <p>Data Protection Officer: Adebanke OLI</p>

            <p className="mt-6">
              The contents of this website have been created with the utmost care. However, we cannot guarantee the
              accuracy, completeness or currency of the content. As a service provider, we are responsible for our own
              content on these pages in accordance with general legislation. However, as a service provider, we are not
              obliged to monitor transmitted or stored third-party information or to investigate circumstances that
              indicate illegal activity. Our liability in such cases is only possible from the time we become aware of a
              specific legal violation. If we become aware of any such legal infringements, we will remove such links
              immediately.
            </p>

            <h3 className="font-semibold text-lg mt-6">Copyright</h3>
            <p>
              The contents and works created by the site operators on these pages are subject to copyright. Any
              duplication, processing, distribution or any form of commercialization of such material beyond the scope
              of the copyright law shall require the prior written consent of its respective author or creator.
              Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
            <p>
              Insofar as the content on this site was not created by the operator, the copyrights of third parties are
              respected. In particular, third-party content is identified as such. Should you nevertheless become aware
              of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we
              will remove such content immediately.
            </p>

            <h3 className="font-semibold text-lg mt-6">Trademarks</h3>
            <p>
              All trademarks and brand names mentioned on this website are the property of their respective owners and
              are used for identification purposes only. The mention of trademarks does not imply that they are not
              protected by the rights of third parties.
            </p>

            <h3 className="font-semibold text-lg mt-6">Data Protection</h3>
            <p>
              We take the protection of your personal data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations and this privacy policy. The use of our
              website is usually possible without providing personal data. If personal data (such as name, address or
              email addresses) is collected on our website, this is always done on a voluntary basis, as far as
              possible. This data will not be passed on to third parties without your express consent.
            </p>

            <h3 className="font-semibold text-lg mt-6">Hyperlinks</h3>
            <p>
              Our website contains links to external third-party websites over whose contents we have no influence.
              Therefore, we cannot assume any liability for these external contents. The respective provider or operator
              of the pages is always responsible for the contents of the linked pages. The linked pages were checked for
              possible legal violations at the time of linking. Illegal contents were not recognizable at the time of
              linking.
            </p>
            <p>
              However, a permanent control of the contents of the linked pages is not reasonable without concrete
              evidence of a violation of the law. If we become aware of any legal infringements, we will remove such
              links immediately.
            </p>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="mb-16">
          <h2 className={`${anton.className} text-4xl md:text-5xl mb-8`}>DISCLAIMER</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              The information provided on Ecolionhousing.co.uk is intended for general information purposes only. While
              we strive to provide accurate and up-to-date information, we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with
              respect to the website or the information, products, services, or related graphics contained on the
              website for any purpose. Any reliance you place on such information is therefore strictly at your own
              risk.
            </p>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or
              consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>
            <p>
              Through this website you are able to link to other websites which are not under the control of
              Ecolionhousing.co.uk. We have no control over the nature, content and availability of those sites. The
              inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within
              them.
            </p>
            <p>
              Every effort is made to keep the website up and running smoothly. However, Ecolionhousing.co.uk takes no
              responsibility for, and will not be liable for, the website being temporarily unavailable due to technical
              issues beyond our control.
            </p>
            <p>
              By using Ecolionhousing.co.uk, you hereby consent to our disclaimer and agree to its terms. If you do not
              agree to these terms, please do not use our website.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
