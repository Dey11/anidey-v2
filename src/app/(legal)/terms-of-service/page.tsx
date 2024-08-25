import { DISCORD_URL } from "@/lib/constants";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6 pt-20 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">Terms of Service</h1>
      <div>
        <h2 className="mb-3 text-2xl font-semibold">
          Terms of Use Welcome to Anidey!
        </h2>
        <p className="mb-4">
          These Terms of Use ("Terms") govern your access to and use of our
          website, applications, and services (collectively, the "Service"). By
          accessing or using Anidey, you agree to be bound by these Terms. If
          you do not agree with these Terms, please do not use our Service.
        </p>
        <h3 className="mb-2 text-xl font-semibold">1. Use of the Service</h3>
        <p className="mb-2">
          1.1 Eligibility: To use our Service, you must be at least 13 years
          old. If you are under 18, you must have the consent of a parent or
          guardian.
        </p>
        <p className="mb-5">
          1.2 Account: You may be required to create an account to access
          certain features of the Service. You agree to provide accurate and
          complete information and to keep your account information up to date.
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </p>
        {/* Uncomment the following paragraph if needed */}
        {/* <p className="mb-5">
          1.3 License: We grant you a limited, non-exclusive, non-transferable,
          revocable license to access and use the Service for your personal,
          non-commercial use, subject to these Terms. You may not reproduce,
          distribute, modify, or create derivative works based on the content
          available on Anidey without our prior written consent.
        </p> */}
        <h3 className="mb-2 text-xl font-semibold">2. Content</h3>
        <p className="mb-2">
          2.1 Third-Party Links: Anidey provides links to third-party websites
          and content related to anime. We do not own, control, or endorse any
          of the third-party content accessible through these links. The
          availability and content of these third-party sites are subject to
          their own terms and privacy policies.
        </p>
        <p className="mb-2">
          2.2 Responsibility: You acknowledge and agree that Anidey is not
          responsible for the content or practices of any third-party websites
          linked from our Service. Your use of third-party sites is at your own
          risk, and you should review their terms of use and privacy policies.
        </p>
        <p className="mb-5">
          2.3 Prohibited Content: You agree not to post, upload, or transmit any
          content that is illegal, offensive, defamatory, or infringes on the
          rights of others. Anidey reserves the right to remove any content that
          violates these Terms or is otherwise objectionable at its sole
          discretion.
        </p>
        <h3 className="mb-2 text-xl font-semibold">
          3. Disclaimers and Limitations of Liability
        </h3>
        <p className="mb-2">
          3.1 No Warranty: The Service is provided "as is" and "as available"
          without any warranties of any kind, either express or implied. We do
          not warrant that the Service will be uninterrupted, error-free, or
          free of viruses or other harmful components.
        </p>
        <p className="mb-5">
          3.2 Limitation of Liability: To the fullest extent permitted by law,
          Anidey and its affiliates shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of
          or in connection with your use of the Service, even if we have been
          advised of the possibility of such damages.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Indemnification</h3>
        <p className="mb-5">
          You agree to indemnify, defend, and hold harmless Anidey and its
          affiliates, officers, directors, employees, and agents from and
          against any claims, liabilities, damages, losses, and expenses
          (including reasonable attorneys’ fees) arising out of or related to
          your use of the Service, your violation of these Terms, or your
          infringement of any rights of another party.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Changes to the Terms</h3>
        <p className="mb-5">
          We reserve the right to modify or update these Terms at any time. We
          will notify you of any changes by posting the revised Terms on our
          website. Your continued use of the Service after the changes have been
          made will constitute your acceptance of the revised Terms.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a className="underline" href={DISCORD_URL}>
            Discord
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
