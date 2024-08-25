import { DISCORD_URL } from "@/lib/constants";
import React from "react";

const DMCA = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-lg p-6 pt-20 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold">DMCA Compliance</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">
          Notice and Takedown Procedure
        </h2>
        <p className="text-gray-700">
          Anidey respects the intellectual property rights of others and expects
          users of the service to do the same. It is our policy to respond to
          clear notices of alleged copyright infringement that comply with the
          Digital Millennium Copyright Act (DMCA). If you believe that your work
          has been copied in a way that constitutes copyright infringement and
          is accessible on our website, please notify us as outlined below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Filing a DMCA Notice</h2>
        <p className="mb-4 text-gray-700">
          If you are a copyright owner, or an agent thereof, and believe that
          any content hosted on Anidey infringes upon your copyrights, you may
          submit a DMCA notice by providing our Designated Copyright Agent with
          the following information in writing:
        </p>
        <ol className="list-inside list-decimal space-y-2 text-gray-700">
          <li>
            Identification of the copyrighted work claimed to have been
            infringed.
          </li>
          <li>
            Identification of the material that is claimed to be infringing or
            to be the subject of infringing activity and that is to be removed
            or access to which is to be disabled, and information reasonably
            sufficient to permit Anidey to locate the material.
          </li>
          <li>
            Your contact information including your name, address, telephone
            number, and email address.
          </li>
          <li>
            A statement that you have a good faith belief that use of the
            material in the manner complained of is not authorized by the
            copyright owner, its agent, or the law.
          </li>
          <li>
            A statement that the information in the notification is accurate,
            and under penalty of perjury, that you are authorized to act on
            behalf of the owner of an exclusive right that is allegedly
            infringed.
          </li>
          <li>Your physical or electronic signature.</li>
        </ol>
      </section>

      {/* <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">
          Designated Copyright Agent
        </h2>
        <address className="not-italic text-gray-700">
          [Your Name]
          <br />
          [Your Address]
          <br />
          [City, State, Zip Code]
          <br />
          <a
            href="mailto:[Your Email Address]"
            className="text-blue-500 hover:underline"
          >
            [Your Email Address]
          </a>
        </address>
      </section> */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Counter-Notification</h2>
        <p className="mb-4 text-gray-700">
          If you believe that the material you posted on Anidey was removed or
          access to it was disabled by mistake or misidentification, you may
          file a counter-notification with our Designated Copyright Agent. To be
          effective, a counter-notification must include the following:
        </p>
        <ol className="list-inside list-decimal space-y-2 text-gray-700">
          <li>
            Identification of the material that has been removed or to which
            access has been disabled, and the location at which the material
            appeared before it was removed or access to it was disabled.
          </li>
          <li>
            Your contact information including your name, address, telephone
            number, and email address.
          </li>
          <li>
            A statement that you consent to the jurisdiction of the federal
            district court for the judicial district in which your address is
            located, or if your address is outside of the United States, for any
            judicial district in which Anidey may be found.
          </li>
          <li>
            A statement that you will accept service of process from the party
            that filed the DMCA notice or the party's agent.
          </li>
          <li>
            A statement under penalty of perjury that you have a good faith
            belief that the material was removed or disabled as a result of
            mistake or misidentification of the material to be removed or
            disabled.
          </li>
          <li>Your physical or electronic signature.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Repeat Infringers</h2>
        <p className="text-gray-700">
          It is our policy to disable and/or terminate the accounts of users who
          are repeat infringers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Modifications</h2>
        <p className="text-gray-700">
          Anidey reserves the right to modify, alter, or add to this policy at
          any time. All users are encouraged to regularly review this policy to
          stay informed about any changes.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
        <p className="text-gray-700">
          For any DMCA-related concerns, you may contact our Designated
          Copyright Agent at{" "}
          <a href={DISCORD_URL} className="underline">
            Discord
          </a>
          . .
        </p>
      </section>
    </div>
  );
};

export default DMCA;
