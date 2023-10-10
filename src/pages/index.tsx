import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";


const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<h1>Hello World</h1>
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

