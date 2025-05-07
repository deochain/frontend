import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import {
  Stack,
  Divider,
  ListItem,
  UnorderedList,
  OrderedList,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function TermCondition() {
  return (
    <Container maxW="6xl" py={10} style={{ margin: "0px", padding: "0px" }}>
      <Box>
        <Heading size="xl" mb={4}>
          Terms of Service
        </Heading>

        <Text fontWeight="bold" mb={4}>
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY.
        </Text>

        <Text mb={4}>
          BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE
          TERMS OF SERVICE AND ALL TERMS INCORPORATED BY REFERENCE.
        </Text>

        <Text mb={8}>
          These Terms of Service and any terms expressly incorporated herein
          (“Terms”) apply to your access to and use of all services (our
          “Services”) provided by inertiascan.com (“Company,” “we,” or “us”).
        </Text>

        <Stack spacing={10}>
          {/* Section 1 - ELIGIBILITY */}
          <Box>
            <Heading size="md" mb={2}>
              1. ELIGIBILITY
            </Heading>
            <Text mb={2}>You represent and warrant that you:</Text>
            <UnorderedList mb={2} pl={5}>
              <ListItem>Are of legal age to form a binding contract;</ListItem>
              <ListItem>
                Have not previously been suspended or removed from using our
                Services;
              </ListItem>
              <ListItem>
                Have full power and authority to enter into this agreement and
                doing so will not violate any other agreement to which you are a
                party.
              </ListItem>
            </UnorderedList>
            <Text>
              If you are registering to use the Services on behalf of a legal
              entity, you further represent and warrant that:
            </Text>
            <UnorderedList pl={5}>
              <ListItem>
                Such legal entity is duly organized and validly existing under
                the applicable laws of its jurisdiction.
              </ListItem>
              <ListItem>
                You are duly authorized by such legal entity to act on its
                behalf.
              </ListItem>
            </UnorderedList>
          </Box>

          <Divider />

          {/* Section 2 - ACCOUNT REGISTRATION */}
          <Box>
            <Heading size="md" mb={2}>
              2. ACCOUNT REGISTRATION
            </Heading>
            <Text mb={2}>
              You must create an account with Company to access the Services
              (“Account”). When you create an Account, you agree to:
            </Text>
            <UnorderedList pl={5}>
              <ListItem>
                Create a strong password that you do not use for any other
                website or online service;
              </ListItem>
              <ListItem>Provide accurate and truthful information;</ListItem>
              <ListItem>
                Maintain and promptly update your Account information;
              </ListItem>
              <ListItem>
                Maintain the security of your Account by protecting your Account
                password and restricting access to your computer and your
                Account;
              </ListItem>
              <ListItem>
                Promptly notify us if you discover or suspect any security
                breaches related to your Account;
              </ListItem>
              <ListItem>
                Take responsibility for all activities under your Account and
                accept all risks of unauthorized access, to the extent permitted
                by law.
              </ListItem>
            </UnorderedList>
            <Text mt={2}>
              When you create an Account, we assign you an account identifier
              that you must retain to access your Account.
            </Text>
          </Box>

          <Divider />

          {/* Section 3 - DISCONTINUANCE */}
          <Box>
            <Heading size="md" mb={2}>
              3. DISCONTINUANCE OF SERVICES
            </Heading>
            <Text>
              We may, in our sole discretion and without liability to you, with
              or without prior notice and at any time, modify or discontinue,
              temporarily or permanently, any portion of our Services.
            </Text>
          </Box>

          <Divider />

          {/* Section 4 - ASSUMPTION OF RISK */}
          <Box>
            <Heading size="md" mb={2}>
              4. ASSUMPTION OF RISK
            </Heading>
            <Text mb={4}>
              You acknowledge and agree that there are risks associated with
              utilizing an Internet-based service including, but not limited to:
            </Text>
            <UnorderedList pl={5} mb={4}>
              <ListItem>Risk of hardware or software failure</ListItem>
              <ListItem>Internet connection disruptions</ListItem>
              <ListItem>Malicious software introduction</ListItem>
              <ListItem>
                Unauthorized third-party access to your account or data
              </ListItem>
            </UnorderedList>

            <Text mb={4}>
              You agree that the Company is not responsible for any
              communication failures, disruptions, or delays when using the
              Services. We are not liable for any damages or claims, including
              but not limited to those arising from:
            </Text>

            <UnorderedList pl={5}>
              <ListItem>Passwords being "Bruteforced"</ListItem>
              <ListItem>Server failure or data loss</ListItem>
              <ListItem>Forgotten passwords</ListItem>
              <ListItem>Corrupted wallet files</ListItem>
              <ListItem>
                Incorrectly constructed transactions or mistyped Inertia
                addresses
              </ListItem>
              <ListItem>Unauthorized access to mobile applications</ListItem>
              <ListItem>
                "Phishing," viruses, third-party attacks or any unauthorized
                third-party activities
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              5. THIRD-PARTY SERVICES AND CONTENT
            </Heading>
            <Text mb={4}>
              In using our Services, you may view content or utilize services
              provided by third parties, including links to web pages and
              services of such parties (“Third-Party Content”).
            </Text>
            <Text mb={4}>
              We do not control, endorse or adopt any Third-Party Content and
              will have no responsibility for Third-Party Content, including,
              without limitation, material that may be misleading, incomplete,
              erroneous, offensive, indecent or otherwise objectionable in your
              jurisdiction.
            </Text>
            <Text>
              In addition, your business dealings or correspondence with such
              third parties are solely between you and the third parties. We are
              not responsible or liable for any loss or damage of any sort
              incurred as the result of any such dealings, and you understand
              that your use of Third-Party Content, and your interactions with
              third parties, is at your own risk.
            </Text>
          </Box>

          {/* Section 6 - ACCEPTABLE USE */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              6. ACCEPTABLE USE
            </Heading>
            <Text mb={4}>
              When accessing or using the Services, you agree that you will not
              violate any law, contract, intellectual property or other
              third-party right or commit a tort, and that you are solely
              responsible for your conduct while using our Services. You must
              not:
            </Text>
            <UnorderedList pl={5} spacing={3}>
              <ListItem>
                Use our Services in any manner that could interfere with,
                disrupt, negatively affect or inhibit other users.
              </ListItem>
              <ListItem>
                Use our Services to engage in illegal activities such as
                gambling, fraud, money-laundering, or terrorism.
              </ListItem>
              <ListItem>
                Use any robot, crawler, or scraping tools not provided by us.
              </ListItem>
              <ListItem>
                Engage in scraping unless solely for public Internet search
                indexing.
              </ListItem>
              <ListItem>
                Reproduce content from our APIs, CSVs, or website without
                consent.
              </ListItem>
              <ListItem>
                Use or attempt to use another user’s account without
                authorization.
              </ListItem>
              <ListItem>
                Attempt to bypass our content filtering or access unauthorized
                areas.
              </ListItem>
              <ListItem>
                Upload or introduce any virus, worm, or other harmful software.
              </ListItem>
              <ListItem>
                Develop third-party applications that interact with our Services
                without written consent.
              </ListItem>
              <ListItem>
                Provide false or misleading information to the platform.
              </ListItem>
              <ListItem>
                Encourage others to engage in any of the above prohibited
                behaviors.
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Section 7 - USER-GENERATED CONTENT */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              7. USER-GENERATED CONTENT
            </Heading>
            <Box mb={4}>
              <Text fontWeight="semibold">
                7.1. Responsibility for Content:
              </Text>
              <Text>
                You are solely responsible for the content you upload or share.
                We may remove any content that violates our terms.
              </Text>
            </Box>

            <Box mb={4}>
              <Text fontWeight="semibold">
                7.2. Ownership & Posting Rights:
              </Text>
              <Text>
                Only post content you own or have rights to. You are responsible
                for complying with third-party licenses.
              </Text>
            </Box>

            <Box mb={4}>
              <Text fontWeight="semibold">7.3. License Grant:</Text>
              <Text>
                You grant us the right to store, display, and publish your
                content as needed to operate our platform.
              </Text>
            </Box>

            <Box mb={4}>
              <Text fontWeight="semibold">7.4. Moral Rights:</Text>
              <Text>
                You retain your moral rights but waive enforcement to allow us
                to use your content under the granted license.
              </Text>
            </Box>

            <Box>
              <Text fontWeight="semibold">
                7.5. Legal Enforcement (if applicable):
              </Text>
              <Text>
                If these terms are unenforceable in your jurisdiction, you
                consent to Inertia scan using and modifying your content
                reasonably to provide services.
              </Text>
            </Box>
          </Box>

          {/* Section 8 - COPYRIGHT & IP */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              8. COPYRIGHTS AND OTHER INTELLECTUAL PROPERTY RIGHTS
            </Heading>
            <Text mb={4}>
              All content and intellectual property on our website, including
              logos, graphics, text, and data, are the property of the Company
              or its licensors. They are protected by copyright and other
              intellectual property laws.
            </Text>
            <Text>
              Unauthorized use is strictly prohibited. You may reference content
              only with proper credit and a link to inertiascan.com.
            </Text>
          </Box>

          {/* Section 9 - TRADEMARKS */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              9. TRADEMARKS
            </Heading>
            <Text mb={4}>
              "Inertia," its logo, and related product or service names are
              trademarks of the Company. You may not use them without written
              permission.
            </Text>
            <Text mb={2}>
              This includes restrictions on metatags, page headers, icons, and
              scripts. All other trademarks belong to their respective owners.
            </Text>
            <Text>
              Mention of third-party trademarks does not imply endorsement or
              sponsorship by us.
            </Text>
          </Box>

          {/* Section 10 - SUSPENSION; TERMINATION */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              10. SUSPENSION; TERMINATION
            </Heading>
            <Text mb={4}>
              We may suspend or terminate your access to the Services without
              notice if a Force Majeure Event occurs, you breach the Terms, or
              continued service becomes commercially unreasonable.
            </Text>
            <Text>
              We may delete your account and all related data at our sole
              discretion and without liability.
            </Text>
          </Box>
          {/* Section 11 - COOKIE STATEMENT */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              11. COOKIE STATEMENT
            </Heading>
            <Text mb={4}>
              This site uses cookies. Cookies are small text files that are
              placed on your computer by websites that you visit. They are
              widely used in order to make websites work, or work more
              efficiently, as well as to provide information to the owners of
              the site. Cookies are typically stored on your computer's hard
              drive.
            </Text>
            <Text mb={4}>
              Information collected from cookies is used by us to evaluate the
              effectiveness of our Site, analyze trends, and manage the
              platform. It helps us improve your experience by delivering more
              relevant features and resolving access difficulties. We may also
              use technologies like web bugs or clear gifs in emails for similar
              purposes.
            </Text>
            <Text mb={4}>
              We use third-party service providers to analyze the use of our
              Site. They may place cookies and collect data that helps us
              understand how visitors interact with the site. These providers
              are contractually restricted from using the data for any purpose
              other than assisting us.
            </Text>
            <Text>
              Your continued use of this site will be interpreted as your
              consent to the use of cookies on your device.
            </Text>
          </Box>

          {/* Section 12 - PRIVACY POLICY */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              12. PRIVACY POLICY
            </Heading>
            <Text>
              Please see our detailed{" "}
              <Box as="span" fontWeight="semibold">
                Privacy Policy
              </Box>
              .
            </Text>
          </Box>

          {/* Section 13 - DISCLAIMER OF WARRANTIES */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              13. DISCLAIMER OF WARRANTIES
            </Heading>
            <UnorderedList spacing={3} pl={5}>
              <ListItem>
                To the maximum extent permitted by law, we provide our services
                “as is” and “as available.” We disclaim all warranties, express
                or implied, including merchantability, fitness for a particular
                purpose, title, and non-infringement.
              </ListItem>
              <ListItem>
                We are not responsible for data loss, corruption, or service
                interruptions due to third-party changes, outages, force majeure
                events, or other technical issues beyond our control.
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Section 14 - LIMITATION OF LIABILITY */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              14. LIMITATION OF LIABILITY
            </Heading>
            <Text mb={4}>
              Except as required by law, Company and its affiliates will not be
              liable for any indirect, special, or consequential damages, loss
              of profits, data, or use arising from your use of our Services or
              Company Materials.
            </Text>
            <Text>
              This includes damages resulting from reliance on information from
              Company, communication failures, data breaches, unauthorized
              access, and more, even if we were advised of the possibility of
              such damages.
            </Text>
          </Box>

          {/* Section 15 - INDEMNITY */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              15. INDEMNITY
            </Heading>
            <Text mb={2}>
              You agree to defend, indemnify and hold harmless Company and its
              affiliates from any claims, losses, or expenses arising out of:
            </Text>
            <UnorderedList spacing={3} pl={5}>
              <ListItem>Your use or conduct on our Services;</ListItem>
              <ListItem>Any feedback you submit;</ListItem>
              <ListItem>Your violation of these Terms;</ListItem>
              <ListItem>
                Your violation of any third-party rights or laws.
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Section 16 - MISCELLANEOUS */}
          <Divider />
          <Box>
            <Heading size="md" mb={2}>
              16. MISCELLANEOUS
            </Heading>

            <Box mb={3}>
              <Text fontWeight="semibold">16.1. Entire Agreement:</Text>
              <Text>
                These Terms constitute the full agreement between you and
                Company. They override any prior agreements unless specifically
                stated otherwise.
              </Text>
            </Box>

            <Box mb={3}>
              <Text fontWeight="semibold">16.2. Amendment:</Text>
              <Text>
                We may update these Terms from time to time. Continued use after
                updates implies your acceptance. If you disagree, discontinue
                use.
              </Text>
            </Box>

            <Box mb={3}>
              <Text fontWeight="semibold">16.3. Waiver:</Text>
              <Text>
                A delay or failure to exercise a right under these Terms is not
                a waiver of that right.
              </Text>
            </Box>

            <Box mb={3}>
              <Text fontWeight="semibold">16.4. Severability:</Text>
              <Text>
                If any part of these Terms is found invalid, the remaining
                provisions remain in effect.
              </Text>
            </Box>

            <Box mb={3}>
              <Text fontWeight="semibold">16.5. Force Majeure:</Text>
              <Text>
                We are not liable for issues caused by events beyond our control
                like natural disasters, war, government actions, or technical
                failures.
              </Text>
            </Box>

            <Box>
              <Text fontWeight="semibold">16.6. Assignment:</Text>
              <Text>
                You may not transfer your rights or obligations under these
                Terms without our consent. We may assign ours without notice.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default TermCondition;
