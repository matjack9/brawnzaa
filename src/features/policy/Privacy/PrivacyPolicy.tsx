import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ExternalURL, Email } from 'common/constants/urls';
import ScrollToTopButton from 'common/components/buttons/ScrollToTop';

export const PrivacyPolicy: React.FC<RouteComponentProps> = () => (
  <Container maxWidth="lg">
    <Typography variant="h3" component="h1" gutterBottom>
      Privacy Policy
    </Typography>
    <Typography paragraph>
      <em>Last updated: May 25, 2020</em>
    </Typography>
    <Typography paragraph>
      This Privacy Policy describes Our policies and procedures on the collection,
      use and disclosure of Your information when You use the Service and tells You
      about Your privacy rights and how the law protects You.
    </Typography>
    <Typography paragraph>
      We use Your Personal data to provide and improve the Service. By using the
      Service, You agree to the collection and use of information in accordance with
      this Privacy Policy.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Interpretation and Definitions
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Interpretation
    </Typography>
    <Typography paragraph>
      The words of which the initial letter is capitalized have meanings defined
      under the following conditions.
    </Typography>
    <Typography paragraph>
      The following definitions shall have the same meaning regardless of whether
      they appear in singular or in plural.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Definitions
    </Typography>
    <Typography gutterBottom>For the purposes of this Cookie Policy:</Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <strong>You</strong> means the individual accessing or using the Website, or
        a company, or any legal entity on behalf of which such individual is
        accessing or using the Website, as applicable.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Company</strong> (referred to as either "the Company," "We," "Us," or
        "Our" in this Cookies Policy) refers to Brawnzaa.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Affiliate</strong> means an entity that controls, is controlled by or
        is under common control with a party, where "control" means ownership of 50%
        or more of the shares, equity interest or other securities entitled to vote
        for election of directors or other managing authority.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Account</strong> means a unique account created for You to access our
        Service or parts of our Service.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Website</strong> refers to Brawnzaa, accessible from{' '}
        <Link
          href={ExternalURL.BRAWNZAA}
          rel="external nofollow noopener"
          target="_blank"
        >
          {ExternalURL.BRAWNZAA}
        </Link>
        .
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Country</strong> refers to: New York, United States
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Service Provider</strong> means any natural or legal person who
        processes the data on behalf of the Company. It refers to third-party
        companies or individuals employed by the Company to facilitate the Service,
        to provide the Service on behalf of the Company, to perform services related
        to the Service or to assist the Company in analyzing how the Service is used.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Third-party Social Media Service</strong> refers to any website or
        any social network website through which a User can log in or create an
        account to use the Service.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Personal Data</strong> is any information that relates to an
        identified or identifiable individual.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Cookies</strong> are small files that are placed on Your computer,
        mobile device or any other device by a website, containing the details of
        Your browsing history on that website among its many uses.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Device</strong> means any device that can access the Service such as
        a computer, a cellphone or a digital tablet.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Usage Data</strong> refers to data collected automatically, either
        generated by the use of the Service or from the Service infrastructure itself
        (for example, the duration of a page visit).
      </Typography>
    </ul>
    <Typography variant="h5" component="h2" gutterBottom>
      Collecting and Using Your Personal Data
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Types of Data Collected
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
      Personal Data
    </Typography>
    <Typography gutterBottom>
      While using Our Service, We may ask You to provide Us with certain personally
      identifiable information that can be used to contact or identify You.
      Personally identifiable information may include, but is not limited to:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        Email address
      </Typography>
      <Typography component="li" gutterBottom>
        First name and last name
      </Typography>
      <Typography component="li" gutterBottom>
        Phone number
      </Typography>
      <Typography component="li" gutterBottom>
        Address, State, Province, ZIP/Postal code, City
      </Typography>
      <Typography component="li" gutterBottom>
        Usage Data
      </Typography>
    </ul>
    <Typography variant="h6" component="h4" gutterBottom>
      Usage Data
    </Typography>
    <Typography paragraph>
      Usage Data is collected automatically when using the Service.
    </Typography>
    <Typography paragraph>
      Usage Data may include information such as Your Device's Internet Protocol
      address (e.g. IP address), browser type, browser version, the pages of our
      Service that You visit, the time and date of Your visit, the time spent on
      those pages, unique device identifiers and other diagnostic data.
    </Typography>
    <Typography paragraph>
      When You access the Service by or through a mobile device, We may collect
      certain information automatically, including, but not limited to, the type of
      mobile device You use, Your mobile device unique ID, the IP address of Your
      mobile device, Your mobile operating system, the type of mobile Internet
      browser You use, unique device identifiers and other diagnostic data.
    </Typography>
    <Typography paragraph>
      We may also collect information that Your browser sends whenever You visit our
      Service or when You access the Service by or through a mobile device.
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
      Tracking Technologies and Cookies
    </Typography>
    <Typography paragraph>
      We use Cookies and similar tracking technologies to track the activity on Our
      Service and store certain information. Tracking technologies used are beacons,
      tags, and scripts to collect and track information and to improve and analyze
      Our Service.
    </Typography>
    <Typography paragraph>
      You can instruct Your browser to refuse all Cookies or to indicate when a
      Cookie is being sent. However, if You do not accept Cookies, You may not be
      able to use some parts of our Service.
    </Typography>
    <Typography paragraph>
      Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on
      your personal computer or mobile device when You go offline, while Session
      Cookies are deleted as soon as You close your web browser.
    </Typography>
    <Typography gutterBottom>
      We use both session and persistent Cookies for the purposes set out below:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Necessary / Essential Cookies</strong>
        </Typography>
        <Typography>Type: Session Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies are essential to provide You with services available
          through the Website and to enable You to use some of its features. They
          help to authenticate users and prevent fraudulent use of user accounts.
          Without these Cookies, the services that You have asked for cannot be
          provided, and We only use these Cookies to provide You with those services.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Cookies Policy / Notice Acceptance Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies identify if users have accepted the use of cookies
          on the Website.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Functionality Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies allow us to remember choices You make when You use
          the Website, such as remembering your login details or language preference.
          The purpose of these Cookies is to provide You with a more personal
          experience and to avoid You having to re-enter your preferences every time
          You use the Website.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Tracking and Performance Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Third-Parties</Typography>
        <Typography>
          Purpose: These Cookies are used to track information about traffic to the
          Website and how users use the Website. The information gathered via these
          Cookies may directly or indirectly identify you as an individual visitor.
          This is because the information collected is typically linked to a
          pseudonymous identifier associated with the device you use to access the
          Website. We may also use these Cookies to test new advertisements, pages,
          features or new functionality of the Website to see how our users react to
          them.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Targeting and Advertising Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Third-Parties</Typography>
        <Typography>
          Purpose: These Cookies track your browsing habits to enable Us to show
          advertising which is more likely to be of interest to You. These Cookies
          use information about your browsing history to group You with other users
          who have similar interests. Based on that information, and with Our
          permission, third party advertisers can place Cookies to enable them to
          show adverts which We think will be relevant to your interests while You
          are on third party websites.
        </Typography>
      </Typography>
    </ul>
    <Typography paragraph>
      For more information about the cookies we use and your choices regarding
      cookies, please visit our Cookies Policy.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Use of Your Personal Data
    </Typography>
    <Typography paragraph>
      The Company may use Personal Data for the following purposes:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <strong>To provide and maintain our Service</strong>, including to monitor
        the usage of our Service.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>To manage Your Account:</strong> to manage Your registration as a
        user of the Service. The Personal Data You provide can give You access to
        different functionalities of the Service that are available to You as a
        registered user.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>For the performance of a contract:</strong> the development,
        compliance and undertaking of the purchase contract for the products, items
        or services You have purchased or of any other contract with Us through the
        Service.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>To contact You:</strong> To contact You by email, telephone calls,
        SMS, or other equivalent forms of electronic communication, such as a mobile
        application's push notifications regarding updates or informative
        communications related to the functionalities, products or contracted
        services, including the security updates, when necessary or reasonable for
        their implementation.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>To provide You</strong> with news, special offers and general
        information about other goods, services and events which we offer that are
        similar to those that you have already purchased or enquired about unless You
        have opted not to receive such information.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>To manage Your requests:</strong> To attend and manage Your requests
        to Us.
      </Typography>
    </ul>
    <Typography gutterBottom>
      We may share your personal information in the following situations:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <strong>With Service Providers:</strong> We may share Your personal
        information with Service Providers to monitor and analyze the use of our
        Service, to show advertisements to You to help support and maintain Our
        Service, to contact You.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>For Business transfers:</strong> We may share or transfer Your
        personal information in connection with, or during negotiations of, any
        merger, sale of Company assets, financing, or acquisition of all or a portion
        of our business to another company.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>With Affiliates:</strong> We may share Your information with Our
        affiliates, in which case we will require those affiliates to honor this
        Privacy Policy. Affiliates include Our parent company and any other
        subsidiaries, joint venture partners or other companies that We control or
        that are under common control with Us.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>With Business partners:</strong> We may share Your information with
        Our business partners to offer You certain products, services or promotions.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>With other users:</strong> when You share personal information or
        otherwise interact in the public areas with other users, such information may
        be viewed by all users and may be publicly distributed outside. If You
        interact with other users or register through a Third-Party Social Media
        Service, Your contacts on the Third-Party Social Media Service may see You
        name, profile, pictures and description of Your activity. Similarly, other
        users will be able to view descriptions of Your activity, communicate with
        You and view Your profile.
      </Typography>
    </ul>
    <Typography variant="h6" component="h3" gutterBottom>
      Retention of Your Personal Data
    </Typography>
    <Typography paragraph>
      The Company will retain Your Personal Data only for as long as is necessary for
      the purposes set out in this Privacy Policy. We will retain and use Your
      Personal Data to the extent necessary to comply with our legal obligations (for
      example, if we are required to retain your data to comply with applicable
      laws), resolve disputes, and enforce our legal agreements and policies.
    </Typography>
    <Typography paragraph>
      The Company will also retain Usage Data for internal analysis purposes. Usage
      Data is generally retained for a shorter period of time, except when this data
      is used to strengthen the security or to improve the functionality of Our
      Service, or We are legally obligated to retain this data for longer time
      periods.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Transfer of Your Personal Data
    </Typography>
    <Typography paragraph>
      Your information, including Personal Data, is processed at the Company's
      operating offices and in any other places where the parties involved in the
      processing are located. It means that this information may be transferred to —
      and maintained on — computers located outside of Your state, province, country
      or other governmental jurisdiction where the data protection laws may differ
      than those from Your jurisdiction.
    </Typography>
    <Typography paragraph>
      Your consent to this Privacy Policy followed by Your submission of such
      information represents Your agreement to that transfer.
    </Typography>
    <Typography paragraph>
      The Company will take all steps reasonably necessary to ensure that Your data
      is treated securely and in accordance with this Privacy Policy and no transfer
      of Your Personal Data will take place to an organization or a country unless
      there are adequate controls in place including the security of Your data and
      other personal information.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Disclosure of Your Personal Data
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
      Business Transactions
    </Typography>
    <Typography paragraph>
      If the Company is involved in a merger, acquisition or asset sale, Your
      Personal Data may be transferred. We will provide notice before Your Personal
      Data is transferred and becomes subject to a different Privacy Policy.
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
      Law enforcement
    </Typography>
    <Typography paragraph>
      Under certain circumstances, the Company may be required to disclose Your
      Personal Data if required to do so by law or in response to valid requests by
      public authorities (e.g. a court or a government agency).
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
      Other legal requirements
    </Typography>
    <Typography gutterBottom>
      The Company may disclose Your Personal Data in the good faith belief that such
      action is necessary to:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        Comply with a legal obligation
      </Typography>
      <Typography component="li" gutterBottom>
        Protect and defend the rights or property of the Company
      </Typography>
      <Typography component="li" gutterBottom>
        Prevent or investigate possible wrongdoing in connection with the Service
      </Typography>
      <Typography component="li" gutterBottom>
        Protect the personal safety of Users of the Service or the public
      </Typography>
      <Typography component="li" gutterBottom>
        Protect against legal liability
      </Typography>
    </ul>
    <Typography variant="h6" component="h3" gutterBottom>
      Security of Your Personal Data
    </Typography>
    <Typography paragraph>
      The security of Your Personal Data is important to Us, but remember that no
      method of transmission over the Internet, or method of electronic storage is
      100% secure. While We strive to use commercially acceptable means to protect
      Your Personal Data, We cannot guarantee its absolute security.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Children's Privacy
    </Typography>
    <Typography paragraph>
      Our Service does not address anyone under the age of 13. We do not knowingly
      collect personally identifiable information from anyone under the age of 13. If
      You are a parent or guardian and You are aware that Your child has provided Us
      with Personal Data, please contact Us. If We become aware that We have
      collected Personal Data from anyone under the age of 13 without verification of
      parental consent, We take steps to remove that information from Our servers.
    </Typography>
    <Typography paragraph>
      If We need to rely on consent as a legal basis for processing Your information
      and Your country requires consent from a parent, We may require Your parent's
      consent before We collect and use that information.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Links to Other Websites
    </Typography>
    <Typography paragraph>
      Our Service may contain links to other websites that are not operated by Us. If
      You click on a third party link, You will be directed to that third party's
      site. We strongly advise You to review the Privacy Policy of every site You
      visit.
    </Typography>
    <Typography paragraph>
      We have no control over and assume no responsibility for the content, privacy
      policies or practices of any third party sites or services.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Changes to this Privacy Policy
    </Typography>
    <Typography paragraph>
      We may update our Privacy Policy from time to time. We will notify You of any
      changes by posting the new Privacy Policy on this page.
    </Typography>
    <Typography paragraph>
      We will let You know via email and/or a prominent notice on Our Service, prior
      to the change becoming effective and update the "Last updated" date at the top
      of this Privacy Policy.
    </Typography>
    <Typography paragraph>
      You are advised to review this Privacy Policy periodically for any changes.
      Changes to this Privacy Policy are effective when they are posted on this page.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Contact Us
    </Typography>
    <Typography paragraph>
      If you have any questions about this Privacy Policy, You can contact us:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        By email:{' '}
        <Link
          href={`mailto:${Email.PRIVACY}`}
          title={`send an email to ${Email.PRIVACY}`}
        >
          {Email.PRIVACY}
        </Link>
      </Typography>
    </ul>
    <Grid container justify="flex-end">
      <Grid item>
        <ScrollToTopButton />
      </Grid>
    </Grid>
  </Container>
);
