
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../config/site';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | Homestead Home Builders"
                description="Our commitment to protecting your personal information. Read our privacy policy to understand how we collect, use, and safeguard your data."
                canonical="https://homesteadhomebuilders.com/privacy-policy"
            />

            <PageHeader
                title="Privacy Policy"
                subtitle="Your trust is the foundation of our business."
                backgroundImage="https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Privacy Policy', path: '/privacy-policy' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <p className="lead text-xl text-slate-600 mb-12">
                            Last Updated: December 15, 2024
                        </p>

                        <p>
                            {SITE_CONFIG.name} ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                            This policy describes the types of information we may collect from you or that you may provide when you visit our website (our "Website")
                            and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <h3>1. Information We Collect About You</h3>
                        <p>We collect several types of information from and about users of our Website, including information:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, postal address, e-mail address, and telephone number, which you provide when filling out forms on our website (e.g., "Request a Discovery Call" or "Join Bid List").</li>
                            <li><strong>Project Details:</strong> Information regarding your property address, budget, and timeline for potential construction projects.</li>
                            <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul>
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us (e.g., sending you our Cost Guide or scheduling a consultation).</li>
                            <li>To fulfill our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                            <li>For internal analytics to improve our website user experience.</li>
                        </ul>

                        <h3>3. Disclosure of Your Information</h3>
                        <p>
                            We do <strong>not</strong> sell, trade, or rent your personal identification information to others. We may disclose aggregated information about our users,
                            and information that does not identify any individual, without restriction.
                        </p>
                        <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                        <ul>
                            <li>To contractors, service providers, and other third parties we use to support our business (e.g., our CRM provider or email marketing platform) and who are bound by contractual obligations to keep personal information confidential.</li>
                            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                            All information you provide to us is stored on our secure servers behind firewalls.
                        </p>
                        <p>
                            Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information,
                            we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.
                        </p>

                        <h3>5. Third-Party Links</h3>
                        <p>
                            Our Website may contain links to other websites (e.g., Houzz, Instagram, Vendor sites). If you click on a third-party link, you will be directed to that site.
                            Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.
                            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>

                        <h3>6. Contact Information</h3>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        </p>
                        <p>
                            <strong>{SITE_CONFIG.name}</strong><br />
                            {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state}<br />
                            Email: {SITE_CONFIG.contact.email}<br />
                            Phone: {SITE_CONFIG.contact.phone}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
