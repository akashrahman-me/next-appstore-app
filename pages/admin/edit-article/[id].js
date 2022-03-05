import AdminLayout from '../../../src/components/AdminLayout';
import HandleArticle from '../../../src/components/HandleArticle';

export default function EditArticle({ params }) {
	return <HandleArticle params={params} />;
}

export const getStaticPaths = async () => ({
	paths: [],
	fallback: true,
});
export async function getStaticProps({ params }) {
	return {
		props: {
			params,
		},
	};
}

EditArticle.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
