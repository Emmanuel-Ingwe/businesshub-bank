import Navigation from "../../components/Layouts/Navigation"
import Head from "next/head";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

type MainLayoutProps = {
	title?: string;
	children: React.ReactNode;
	ignoreDefaultTitle?: boolean;
	ignoreDefaultKeywords?: boolean;
	ignoreDefaultDescriprion?: boolean;
	ignoreDefaultImage?: boolean;
};

const MainLayout = ({
	children,
	title = "|Business hub|",
}: MainLayoutProps) => {
	useEffect(() => {
		AOS.init({
			delay: 200,
			once: true,
		});
	}, []);

	return (
		<>
			<Head>
				<>
					<title>{title}</title>
					<meta property='og:title' content={title} />
					<meta name='twitter:title' content={title} />
					<meta name='twitter:image:alt' content={title} />
					<meta
						name='viewport'
						content='width=device-width, user-scalable=no'
					/>
					<meta
						name='keywords'
						content='Financial goals, secure future, savings options, financial services, personalized solutions, retirement planning, education funding, investment opportunities, wealth management, financial success, retirement savings, financial planning, investment strategies, secure investments, financial advisors, wealth building, financial empowerment, savings accounts, investment portfolio, financial security'
					/>
					<meta
						property='og:description'
						content='At business hub we...'
					/>
					<meta
						name='twitter:description'
						content='At the business hub.....'
					/>
					<meta property='og:image' content='/images/logo.jpg' />
					<meta name='twitter:image' content='/images/logo0.jpg' />
				</>
			</Head>
			<>
				<Navigation />
				<main className='w-full'>{children}</main>
				{/* <Footer /> */}
			</>
		</>
	);
};

export default MainLayout;