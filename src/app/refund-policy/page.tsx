import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and problem-resolution policy for Velayon Dynamics digital products and separately contracted development services.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <><Navigation /><main className="policy-page"><article className="container"><p className="eyebrow blue">Effective September 29, 2026</p><h1>Refund policy</h1><p>This policy explains how Velayon Dynamics handles problems and refund requests for original digital products sold through velayon.com. It does not limit any mandatory rights available under applicable consumer law.</p><h2>Digital products</h2><p>Because downloadable files can be accessed immediately, completed digital-product purchases are generally non-refundable after access or delivery except where required by law. We will investigate requests where a product is inaccessible, materially different from its description, duplicated in error, or technically damaged.</p><h2>How to request help</h2><p>Submit the order email, purchase date and a clear description of the problem through our <Link href="/contact?project=Digital%20product%20enquiry">digital-product support form</Link>. Please contact us within 14 days of purchase when practical so the issue can be reviewed promptly.</p><h2>Resolution</h2><p>Depending on the circumstances, we may replace or repair the files, provide access instructions, offer an appropriate partial remedy, or approve a refund. Refund timing depends on the payment method and payment provider.</p><h2>Paddle purchases</h2><p>If Paddle processed the transaction, Paddle is the merchant of record. Refunds are handled under Paddle’s buyer terms, its <a href="https://www.paddle.com/legal/refund-policy" rel="noopener noreferrer">Refund Policy</a>, applicable law and any additional rights stated here. Buyers can also use Paddle’s order-support service.</p><h2>Development services</h2><p>Website and mobile-development services are contracted separately from digital products. Cancellation, milestone and refund terms for those services are stated in the signed proposal or statement of work.</p><h2>Contact</h2><p>Use the <Link href="/contact">Velayon Dynamics contact page</Link> for product support or questions about this policy.</p></article></main><Footer /></>;
}
