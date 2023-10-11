import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";


import { Body,  } from "../../components"


const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<Body />
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

