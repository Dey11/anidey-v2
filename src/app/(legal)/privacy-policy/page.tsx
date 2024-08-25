import { DISCORD_URL } from "@/lib/constants";

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6 pt-20 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-600">
        Last updated: [25th August, 2024.]
      </p>
      <p className="mb-4">
        Thank you for using our anime streaming website. Your privacy is
        important to us. This Privacy Policy outlines how we collect, use, and
        protect your personal information when you use our services.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">1. Information We Collect</h2>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong>Email Address:</strong> When you log in using your Google
          account, we collect your email address to create and manage your
          account.
        </li>
        <li>
          <strong>Profile Picture:</strong> We collect and store your profile
          picture linked to your Google account.
        </li>
        <li>
          <strong>Viewing History:</strong> We keep track of the animes you
          watch on our website to enhance your user experience.
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">
        2. How We Use Your Information
      </h2>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong>Account Management:</strong> Your email address is used to
          manage your account and provide you with access to our services.
        </li>
        <li>
          <strong>Personalization:</strong> Your viewing history is used to
          recommend animes and improve your experience on our platform.
        </li>
        <li>
          <strong>Profile Display:</strong> Your profile picture is displayed in
          your account settings and profile page.
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">
        3. Information Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not share your personal information with third parties except as
        necessary to comply with legal obligations or protect our rights.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your
        information from unauthorized access, alteration, or destruction.
        However, please note that no method of transmission over the internet is
        100% secure.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">5. External API Data</h2>
      <p className="mb-4">
        Our website fetches anime data from external APIs. We do not store or
        control this data, and it is subject to the privacy policies of the
        respective API providers.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">6. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your browsing experience. Cookies
        are small data files stored on your device that help us improve our
        services.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">7. Third-Party Services</h2>
      <p className="mb-4">
        Our website may contain links to third-party services or websites. We
        are not responsible for the privacy practices of these third-party
        services.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">9. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a className="underline" href={DISCORD_URL}>
          Discord
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
