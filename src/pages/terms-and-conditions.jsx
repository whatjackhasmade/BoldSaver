import React from "react";

import Heading from "../components/atoms/Heading";

import Base from "../components/templates/Base";

const TermsAndConditions = () => {
	return (
		<Base>
			<article>
				<Heading level="1" visual="2">
					BoldSaver Terms and Conditions
				</Heading>
				<Heading level="2" visual="3">
					1. Terms
				</Heading>
				<p>
					By accessing the website at https://boldsaver.com, you are agreeing to
					be bound by these terms of service, all applicable laws and
					regulations, and agree that you are responsible for compliance with
					any applicable local laws. If you do not agree with any of these
					terms, you are prohibited from using or accessing this site. The
					materials contained in this website are protected by applicable
					copyright and trademark law.
				</p>
				<Heading level="2" visual="3">
					2. Use License
				</Heading>
				<ol type="a">
					<li>
						Permission is granted to temporarily download one copy of the
						materials (information or software) on BoldSaver's website for
						personal, non-commercial transitory viewing only. This is the grant
						of a license, not a transfer of title, and under this license you
						may not:
						<ol type="i">
							<li>modify or copy the materials;</li>
							<li>
								use the materials for any commercial purpose, or for any public
								display (commercial or non-commercial);
							</li>
							<li>
								attempt to decompile or reverse engineer any software contained
								on BoldSaver's website;
							</li>
							<li>
								remove any copyright or other proprietary notations from the
								materials; or
							</li>
							<li>
								transfer the materials to another person or "mirror" the
								materials on any other server.
							</li>
						</ol>
					</li>
					<li>
						This license shall automatically terminate if you violate any of
						these restrictions and may be terminated by BoldSaver at any time.
						Upon terminating your viewing of these materials or upon the
						termination of this license, you must destroy any downloaded
						materials in your possession whether in electronic or printed
						format.
					</li>
				</ol>
				<Heading level="2" visual="3">
					3. Disclaimer
				</Heading>
				<ol type="a">
					<li>
						The materials on BoldSaver's website are provided on an 'as is'
						basis. BoldSaver makes no warranties, expressed or implied, and
						hereby disclaims and negates all other warranties including, without
						limitation, implied warranties or conditions of merchantability,
						fitness for a particular purpose, or non-infringement of
						intellectual property or other violation of rights.
					</li>
					<li>
						Further, BoldSaver does not warrant or make any representations
						concerning the accuracy, likely results, or reliability of the use
						of the materials on its website or otherwise relating to such
						materials or on any sites linked to this site.
					</li>
				</ol>
				<Heading level="2" visual="3">
					4. Limitations
				</Heading>
				<p>
					In no event shall BoldSaver or its suppliers be liable for any damages
					(including, without limitation, damages for loss of data or profit, or
					due to business interruption) arising out of the use or inability to
					use the materials on BoldSaver's website, even if BoldSaver or a
					BoldSaver authorized representative has been notified orally or in
					writing of the possibility of such damage. Because some jurisdictions
					do not allow limitations on implied warranties, or limitations of
					liability for consequential or incidental damages, these limitations
					may not apply to you.
				</p>
				<Heading level="2" visual="3">
					5. Accuracy of materials
				</Heading>
				<p>
					The materials appearing on BoldSaver's website could include
					technical, typographical, or photographic errors. BoldSaver does not
					warrant that any of the materials on its website are accurate,
					complete or current. BoldSaver may make changes to the materials
					contained on its website at any time without notice. However BoldSaver
					does not make any commitment to update the materials.
				</p>
				<Heading level="2" visual="3">
					6. Links
				</Heading>
				<p>
					BoldSaver has not reviewed all of the sites linked to its website and
					is not responsible for the contents of any such linked site. The
					inclusion of any link does not imply endorsement by BoldSaver of the
					site. Use of any such linked website is at the user's own risk.
				</p>
				<Heading level="2" visual="3">
					7. Modifications
				</Heading>
				<p>
					BoldSaver may revise these terms of service for its website at any
					time without notice. By using this website you are agreeing to be
					bound by the then current version of these terms of service.
				</p>
				<Heading level="2" visual="3">
					8. Governing Law
				</Heading>
				<p>
					These terms and conditions are governed by and construed in accordance
					with the laws of United Kingdom and you irrevocably submit to the
					exclusive jurisdiction of the courts in that State or location.
				</p>
			</article>
		</Base>
	);
};

export default TermsAndConditions;
